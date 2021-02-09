import {
  calculateDimensions,
  resolveFocalPointCoordinates,
} from './ImageUtils';
import { FocalPointPresets } from './types';

describe('ImageUtils', () => {
  describe('dimensions', () => {
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
        height: Math.round(width / sampleAspectRatio),
      };
      const calculatedDimensions = calculateDimensions({
        ...sampleDimensions,
        aspectRatio: sampleAspectRatio,
      });

      expect(calculatedDimensions).toEqual(expectedDimensions);
    });

    it('should calculate the missing height by the given width and aspect ratio', async () => {
      const { width } = sampleDimensions;
      const expectedDimensions = {
        width,
        height: Math.round(width / sampleAspectRatio),
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
        width: Math.round(height * sampleAspectRatio),
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

  describe('focal point', () => {
    it('should return an object of coordinates as is', async () => {
      const sampleCoordinates = { x: 120, y: 120 };
      const coordinates = resolveFocalPointCoordinates(sampleCoordinates);

      expect(coordinates).toEqual(sampleCoordinates);
    });

    it('should return an object of coordinates when having preset', async () => {
      const [[samplePreset, sampleCoordinates]] = Object.entries(
        FocalPointPresets,
      );
      const coordinates = resolveFocalPointCoordinates(samplePreset);

      expect(coordinates).toEqual(sampleCoordinates);
    });

    it('should return `null` when having incorrect preset', async () => {
      const incorrectPreset = 'Something';
      const coordinates = resolveFocalPointCoordinates(incorrectPreset);

      expect(coordinates).toBeNull();
    });
  });
});
