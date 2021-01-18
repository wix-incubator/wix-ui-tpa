import { calculateDimensions } from './ImageUtils';

describe('ImageUtils', () => {
  it('should return the dimensions as are', async () => {
    const expectedDimensions = { width: 480, height: 360 };

    const calculatedDimensions = calculateDimensions(expectedDimensions);

    expect(calculatedDimensions).toEqual(expectedDimensions);
  });
});
