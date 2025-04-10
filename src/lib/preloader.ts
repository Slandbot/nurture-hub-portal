import { imageService } from '@/services/image';

// Critical images that should be preloaded immediately
const CRITICAL_IMAGES = [
  '/images/mom-and-baby.jpg',  // Using local images instead of external URLs
  '/images/pregnancy.jpg',
  '/placeholder.svg'
];

// Images to preload after critical images
const SECONDARY_IMAGES = [
  // Add secondary images here as needed
];

export async function preloadCriticalImages(): Promise<void> {
  try {
    // Load images in parallel but handle each independently
    const results = await Promise.allSettled(
      CRITICAL_IMAGES.map(src => imageService.loadImage(src))
    );
    
    // Log any failures but don't break the app
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        console.warn(`Failed to preload critical image ${CRITICAL_IMAGES[index]}:`, result.reason);
      }
    });
  } catch (error) {
    console.error('Failed to preload critical images:', error);
  }
}

export async function preloadSecondaryImages(): Promise<void> {
  if (SECONDARY_IMAGES.length === 0) return;

  const preloadWithTimeout = () => {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Secondary image preload timed out')), 5000);
    });

    return Promise.race([
      imageService.preloadImages(SECONDARY_IMAGES),
      timeoutPromise
    ]).catch(error => {
      console.warn('Secondary image preload failed:', error);
    });
  };

  try {
    // Use requestIdleCallback to load secondary images when the browser is idle
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(
        () => { preloadWithTimeout(); },
        { timeout: 2000 }
      );
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => { preloadWithTimeout(); }, 2000);
    }
  } catch (error) {
    console.warn('Failed to schedule secondary image preload:', error);
  }
}

// Clean up old cached images periodically
export function initializeCacheCleanup(): void {
  const CLEANUP_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours
  
  const cleanup = () => {
    imageService.cleanCache().catch(error => {
      console.warn('Failed to clean image cache:', error);
    });
  };

  // Run cleanup once per day
  setInterval(cleanup, CLEANUP_INTERVAL);
  
  // Also clean up on page load if it hasn't been done in the last day
  cleanup();
}