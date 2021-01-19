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

  it('should throw an exception when both dimensions are missing', async () => {
    const invalidUsage = () => {
      calculateDimensions({});
    };

    expect(invalidUsage).toThrow(Error);
  });

  it('should throw an exception when having width but aspect ratio is missing', async () => {
    const { width } = sampleDimensions;
    const invalidUsage = () => {
      calculateDimensions({ width });
    };

    expect(invalidUsage).toThrow(Error);
  });

  it('should throw an exception when having height but aspect ratio is missing', async () => {
    const { height } = sampleDimensions;
    const invalidUsage = () => {
      calculateDimensions({ height });
    };

    expect(invalidUsage).toThrow(Error);
  });
});
