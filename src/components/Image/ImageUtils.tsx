import { Dimensions, FocalPoint, FocalPointPresets } from './types';

/**
 * This function calculates the dimensions according the following logic:
 * 1. Given fixed dimensions => returns them as are
 * 2. Given fixed dimensions and an aspect ratio => returns the original width and calculates the height
 * 3. Given one fixed dimension and an aspect ratio => returns the original given dimension and calculates the missing one
 * 4. Otherwise => returns `null`
 */
export function calculateDimensions({
  width,
  height,
  aspectRatio,
}: {
  width?: number;
  height?: number;
  aspectRatio?: number;
}): Dimensions | null {
  if (!(width && height) && !((width || height) && aspectRatio)) {
    return null;
  }

  let calculatedWidth = width,
    calculatedHeight = height;

  if (aspectRatio) {
    if (width) {
      calculatedHeight = Math.round(width / aspectRatio);
    } else {
      calculatedWidth = Math.round(height * aspectRatio);
    }
  }

  return { width: calculatedWidth, height: calculatedHeight };
}

/**
 * This function resolves the focal point coordinates according the following logic:
 * 1. Given a preset string => returns its coordinates
 * 2. Given an incorrect preset string => returns `null`
 * 3. Otherwise => returns the given coordinates
 */
export function resolveFocalPointCoordinates(
  focalPoint: string | FocalPoint,
): FocalPoint | null {
  if (typeof focalPoint === 'string') {
    return FocalPointPresets[focalPoint] || null;
  }

  return focalPoint;
}
