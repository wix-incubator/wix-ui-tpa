import { ThumbnailImage, ThumbnailImageProps } from '.';
import Registry from '@ui-autotools/registry';

const ThumbnailImageMetadata = Registry.getComponentMetadata(ThumbnailImage);
ThumbnailImageMetadata.nonReactStrictModeCompliant = true;

ThumbnailImageMetadata.addSim({
  title: 'render with alt',
  props: {
    src: 'something',
    alt: 'some alternative text',
  } as ThumbnailImageProps,
});
