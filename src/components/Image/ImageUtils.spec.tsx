import { calculateDimensions } from './ImageUtils';

describe('ImageUtils', () => {
  const sampleDimensions = { width: 480, height: 360 };
  const sampleAspectRatio = 1.77;

  it('should return the dimensions as are', async () => {
    const calculatedDimensions = calculateDimensions(sampleDimensions);

    expect(calculatedDimensions).toEqual(sampleDimensions);
  });

  it('should calculate the height when having both dimensions and aspect ratio', async () => {
    const { width } = sampleDimensions;
    const expectedDimensions = {
      width,
      height: width / sampleAspectRatio,
    };
    const calculatedDimensions = calculateDimensions({
      ...sampleDimensions,
      aspectRatio: sampleAspectRatio,
    });

    expect(calculatedDimensions).toEqual(expectedDimensions);
  });

  it('should calculate the missing height by the given width and aspect ratio', async () => {
    const { width, height } = sampleDimensions;
    const expectedDimensions = {
      width,
      height: width / sampleAspectRatio,
    };
    const calculatedDimensions = calculateDimensions({
      width,
      aspectRatio: sampleAspectRatio,
    });

    expect(calculatedDimensions).toEqual(expectedDimensions);
  });

  it('should calculate the missing width by the given height and aspect ratio', async () => {
    const { height } = sampleDimensions;
    const expectedDimensions = {
      width: height * sampleAspectRatio,
      height,
    };
    const calculatedDimensions = calculateDimensions({
      height,
      aspectRatio: sampleAspectRatio,
    });

    expect(calculatedDimensions).toEqual(expectedDimensions);
  });

  it('should return `null` when both dimensions are missing', async () => {
    const calculatedDimensions = calculateDimensions({});

    expect(calculatedDimensions).toBeNull();
  });

  it('should return `null` when having width but aspect ratio is missing', async () => {
    const { width } = sampleDimensions;
    const calculatedDimensions = calculateDimensions({ width });

    expect(calculatedDimensions).toBeNull();
  });

  it('should return `null` when having height but aspect ratio is missing', async () => {
    const { height } = sampleDimensions;
    const calculatedDimensions = calculateDimensions({ height });

    expect(calculatedDimensions).toBeNull();
  });
});
