/**
 * This function calculates the dimensions according the following logic:
 * 1. Given fixed dimensions => returns them as are
 * 2. Given fixed dimensions and an aspect ratio => returns the original width and calculates the height
 * 3. Given one fixed dimension and an aspect ratio => returns the original given dimension and calculates the missing one
 */
export function calculateDimensions({
  width,
  height,
  aspectRatio,
}: {
  width?: number;
  height?: number;
  aspectRatio?: number;
}) {
  if (!(width && height) && !((width || height) && aspectRatio)) {
    throw new Error(
      'You must provide both dimensions or at least one dimension with an aspect ratio.',
    );
  }

  let calculatedWidth = width,
    calculatedHeight = height;

  if (aspectRatio) {
    if (width) {
      calculatedHeight = width / aspectRatio;
    } else {
      calculatedWidth = height * aspectRatio;
    }
  }

  return { width: calculatedWidth, height: calculatedHeight };
}
