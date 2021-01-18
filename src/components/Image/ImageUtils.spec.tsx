import { calculateDimensions } from './ImageUtils';

describe('ImageUtils', () => {
  const sampleDimensions = { width: 480, height: 360 };
  const sampleAspectRatio = 1.77;

  it('should return the dimensions as are', async () => {
    const calculatedDimensions = calculateDimensions(sampleDimensions);

    expect(calculatedDimensions).toEqual(sampleDimensions);
  });

  it('should calculate both dimensions by the given aspect ratio', async () => {
    const expectedDimensions = {
      width: sampleDimensions.width / sampleAspectRatio,
      height: sampleDimensions.height / sampleAspectRatio,
    };
    const calculatedDimensions = calculateDimensions({
      ...sampleDimensions,
      aspectRatio: sampleAspectRatio,
    });

    expect(calculatedDimensions).toEqual(expectedDimensions);
  });

  it('should calculate the missing height by the given width and aspect ratio', async () => {
    const expectedDimensions = {
      width: sampleDimensions.width,
      height: sampleDimensions.height / sampleAspectRatio,
    };
    const calculatedDimensions = calculateDimensions({
      width: sampleDimensions.width,
      aspectRatio: sampleAspectRatio,
    });

    expect(calculatedDimensions).toEqual(expectedDimensions);
  });

  it('should calculate the missing width by the given height and aspect ratio', async () => {
    const expectedDimensions = {
      width: sampleDimensions.width / sampleAspectRatio,
      height: sampleDimensions.height,
    };
    const calculatedDimensions = calculateDimensions({
      height: sampleDimensions.height,
      aspectRatio: sampleAspectRatio,
    });

    expect(calculatedDimensions).toEqual(expectedDimensions);
  });
});
