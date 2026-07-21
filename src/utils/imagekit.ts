/**
 * ImageKit CDN Helper Utility
 * Formats image paths to serve through ImageKit CDN with automatic optimization (f-auto, q-auto)
 * and custom transformations.
 */

// Retrieve ImageKit URL Endpoint from environment variables (supports Vite & Next.js conventions)
const DEFAULT_IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/0q9tfyg2b';

declare const process: { env?: { [key: string]: string | undefined } } | undefined;

export const IMAGEKIT_URL_ENDPOINT = 
  (typeof process !== 'undefined' && process?.env?.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT) ||
  (typeof process !== 'undefined' && process?.env?.VITE_IMAGEKIT_URL_ENDPOINT) ||
  DEFAULT_IMAGEKIT_ENDPOINT;

export type ImageTransformationType = 'hero' | 'gallery' | 'card' | 'thumbnail' | 'icon' | 'custom';

/**
 * Generates an ImageKit optimized URL for a given path or external image URL.
 * 
 * @param path Relative path (e.g. 'hero/gym-bg.webp') or full URL
 * @param transformationPreset Preset type or custom transformation string (e.g. 'tr:w-500,f-auto,q-auto')
 */
export const getImageKitUrl = (
  path: string,
  transformationPreset: ImageTransformationType | string = 'card',
  customTransform?: string
): string => {
  if (!path) return '';

  // Standard transformation presets as defined in requirements
  let transformStr = 'tr:f-auto,q-auto';

  if (typeof transformationPreset === 'string' && transformationPreset.startsWith('tr:')) {
    transformStr = transformationPreset;
  } else {
    switch (transformationPreset) {
      case 'hero':
        transformStr = 'tr:w-1920,h-1080,c-at_max,f-auto,q-auto';
        break;
      case 'gallery':
        transformStr = 'tr:w-900,f-auto,q-auto';
        break;
      case 'card':
        transformStr = 'tr:w-500,f-auto,q-auto';
        break;
      case 'thumbnail':
        transformStr = 'tr:w-300,f-auto,q-auto';
        break;
      case 'icon':
        transformStr = 'tr:w-128,f-auto,q-auto';
        break;
      case 'custom':
        transformStr = customTransform || 'tr:f-auto,q-auto';
        break;
      default:
        transformStr = 'tr:f-auto,q-auto';
    }
  }

  // If path is already a full Unsplash or external URL, route through ImageKit fetch/proxy if needed or append params
  if (path.startsWith('http://') || path.startsWith('https://')) {
    if (path.includes('ik.imagekit.io')) {
      // Already an ImageKit URL
      if (!path.includes('tr:')) {
        const urlParts = path.split('/');
        urlParts.splice(3, 0, transformStr);
        return urlParts.join('/');
      }
      return path;
    }
    // Handle external images (e.g. Unsplash) via ImageKit CDN proxy format
    const baseUrl = IMAGEKIT_URL_ENDPOINT.replace(/\/$/, '');
    const cleanPath = encodeURIComponent(path);
    return `${baseUrl}/${transformStr}/${cleanPath}`;
  }

  // Clean relative path leading slash
  const cleanPath = path.replace(/^\//, '');
  const baseUrl = IMAGEKIT_URL_ENDPOINT.replace(/\/$/, '');
  
  return `${baseUrl}/${transformStr}/${cleanPath}`;
};
