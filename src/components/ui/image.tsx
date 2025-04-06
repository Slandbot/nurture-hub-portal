import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';
import { imageService } from '@/services/image';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  aspectRatio?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  quality?: number;
}

export function Image({
  src,
  alt = '',
  className,
  fallback = '/placeholder.svg',
  aspectRatio = '16/9',
  priority = false,
  width,
  height,
  quality,
  ...props
}: ImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageData, setImageData] = useState<{
    src: string;
    blurDataURL?: string;
    width?: number;
    height?: number;
  }>({
    src: fallback
  });

  useEffect(() => {
    if (!src) return;

    const loadImage = async () => {
      try {
        const metadata = await imageService.loadImage(src, {
          width,
          height,
          quality
        });

        setImageData({
          src: metadata.src,
          blurDataURL: metadata.blurDataURL,
          width: metadata.width,
          height: metadata.height
        });

        const img = new window.Image();
        img.src = metadata.src;
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        setLoading(false);
        setError(false);
      } catch (err) {
        console.error('Failed to load image:', err);
        setImageData({ src: fallback });
        setLoading(false);
        setError(true);
      }
    };

    if (priority) {
      loadImage();
    } else {
      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadImage();
            observer.disconnect();
          }
        },
        {
          rootMargin: '50px'
        }
      );

      const element = document.createElement('div');
      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    }
  }, [src, fallback, priority, width, height, quality]);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-muted',
        className
      )}
      style={{ 
        aspectRatio,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined
      }}
    >
      {loading && (
        <Skeleton className="absolute inset-0" />
      )}
      
      {imageData.blurDataURL && (
        <img
          src={imageData.blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 blur-sm scale-110"
          style={{
            opacity: loading ? 1 : 0
          }}
        />
      )}

      <img
        src={imageData.src}
        alt={alt}
        width={imageData.width}
        height={imageData.height}
        className={cn(
          'h-full w-full object-cover transition-all duration-300',
          loading ? 'opacity-0 scale-110' : 'opacity-100 scale-100',
          error ? 'grayscale' : ''
        )}
        loading={priority ? undefined : "lazy"}
        {...props}
      />
    </div>
  );
}