import { imageService } from '@/services/image';

// Critical images that should be preloaded immediately
const CRITICAL_IMAGES = [
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7', // Dr. Nitika's profile
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f', // Featured book
  'https://images.unsplash.com/photo-1591522810850-58128c5fb089', // Featured event
];

// Images to preload after critical images
const SECONDARY_IMAGES = [
  'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1', // Baby journal
  'https://images.unsplash.com/photo-1576092768241-dec231879fc3', // Wellness products
  'https://images.unsplash.com/photo-1583947215259-38e31be8751f', // Care kit
];

export async function preloadCriticalImages(): Promise<void> {
  try {
    await imageService.preloadImages(CRITICAL_IMAGES);
  } catch (error) {
    console.error('Failed to preload critical images:', error);
  }
}

export async function preloadSecondaryImages(): Promise<void> {
  try {
    // Use requestIdleCallback to load secondary images when the browser is idle
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(
        () => {
          imageService.preloadImages(SECONDARY_IMAGES);
        },
        { timeout: 2000 }
      );
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        imageService.preloadImages(SECONDARY_IMAGES);
      }, 2000);
    }
  } catch (error) {
    console.error('Failed to preload secondary images:', error);
  }
}

// Clean up old cached images periodically
export function initializeCacheCleanup(): void {
  const CLEANUP_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours
  
  const cleanup = () => {
    imageService.cleanCache().catch(error => {
      console.error('Failed to clean image cache:', error);
    });
  };

  // Run cleanup once per day
  setInterval(cleanup, CLEANUP_INTERVAL);
  
  // Also clean up on page load if it hasn't been done in the last day
  cleanup();
}