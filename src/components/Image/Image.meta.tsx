import { Image, ImageProps } from '.';
import Registry from '@ui-autotools/registry';

const ImageMetadata = Registry.getComponentMetadata(Image);
ImageMetadata.nonReactStrictModeCompliant = true;

ImageMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  } as ImageProps,
});
