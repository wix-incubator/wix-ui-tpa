import { Image, ImageProps } from '.';
import Registry from '@ui-autotools/registry';

const ImageMetadata = Registry.getComponentMetadata(Image);
ImageMetadata.nonReactStrictModeCompliant = true;

ImageMetadata.addSim({
  title: 'render',
  props: {} as ImageProps,
});

ImageMetadata.addSim({
  title: 'render with alt',
  props: {
    alt: 'some alternative text',
  } as ImageProps,
});
