export function calculateDimensions({
  width,
  height,
  aspectRatio,
}: {
  width?: number;
  height?: number;
  aspectRatio?: number;
}) {
  if ((!width && !height) || ((width || height) && !aspectRatio)) {
    throw new Error(
      'You must provide both dimensions or at least one dimension with an aspect ratio.',
    );
  }

  if (aspectRatio) {
  }

  return { width, height };
}
