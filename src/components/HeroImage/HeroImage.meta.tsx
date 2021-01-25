import { HeroImage, HeroImageProps } from '.';
import Registry from '@ui-autotools/registry';

const HeroImageMetadata = Registry.getComponentMetadata(HeroImage);
HeroImageMetadata.nonReactStrictModeCompliant = true;

HeroImageMetadata.addSim({
  title: 'render with alt',
  props: {
    src: 'something',
    alt: 'some alternative text',
  } as HeroImageProps,
});
