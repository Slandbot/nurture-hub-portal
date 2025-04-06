import { cacheService } from './cache';

interface ImageDimensions {
  width: number;
  height: number;
}

interface ImageMetadata extends ImageDimensions {
  src: string;
  blurDataURL?: string;
  cacheKey?: string;
}

class ImageService {
  private imageCacheStore = 'imageCache' as const;
  private cacheExpiry = 7 * 24 * 60 * 60 * 1000; // 7 days

  async loadImage(src: string, options: { width?: number; height?: number; quality?: number } = {}): Promise<ImageMetadata> {
    const cacheKey = this.getCacheKey(src, options);
    
    // Try to get from cache first
    const cached = await this.getFromCache(cacheKey);
    if (cached && !this.isExpired(cached.timestamp)) {
      return cached.data;
    }

    // Generate blur placeholder
    const blurDataURL = await this.generateBlurPlaceholder(src);

    // Load and process image
    const dimensions = await this.getImageDimensions(src);
    const metadata: ImageMetadata = {
      src,
      width: options.width || dimensions.width,
      height: options.height || dimensions.height,
      blurDataURL,
      cacheKey
    };

    // Cache the result
    await this.cacheMetadata(cacheKey, metadata);

    return metadata;
  }

  private getCacheKey(src: string, options: { width?: number; height?: number; quality?: number }): string {
    return `${src}-${options.width || ''}-${options.height || ''}-${options.quality || ''}`;
  }

  private async getFromCache(key: string): Promise<{ data: ImageMetadata; timestamp: number } | null> {
    return cacheService.get(this.imageCacheStore, key);
  }

  private async cacheMetadata(key: string, metadata: ImageMetadata): Promise<void> {
    await cacheService.set(this.imageCacheStore, key, {
      data: metadata,
      timestamp: Date.now()
    });
  }

  private isExpired(timestamp: number): boolean {
    return Date.now() - timestamp > this.cacheExpiry;
  }

  private async getImageDimensions(src: string): Promise<ImageDimensions> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight
        });
      };
      img.src = src;
    });
  }

  private async generateBlurPlaceholder(src: string): Promise<string> {
    // Create a tiny version of the image for blurred placeholder
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = await new Promise<HTMLImageElement>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });

    // Scale down to tiny size for blur effect
    canvas.width = 40;
    canvas.height = Math.round((40 * img.height) / img.width);

    if (ctx) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // Apply slight blur
      ctx.filter = 'blur(4px)';
      ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    }

    return canvas.toDataURL('image/jpeg', 0.5);
  }

  // Helper method to preload multiple images
  async preloadImages(srcs: string[]): Promise<void> {
    await Promise.all(srcs.map(src => this.loadImage(src)));
  }

  // Clean up expired cache entries
  async cleanCache(): Promise<void> {
    const allEntries = await cacheService.getAll(this.imageCacheStore);
    for (const entry of allEntries) {
      if (this.isExpired(entry.timestamp)) {
        await cacheService.remove(this.imageCacheStore, entry.id);
      }
    }
  }
}

export const imageService = new ImageService();