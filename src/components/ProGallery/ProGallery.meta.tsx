import { ProGallery } from '.';
import Registry from '@ui-autotools/registry';

const ProGalleryMetadata = Registry.getComponentMetadata(ProGallery);
ProGalleryMetadata.nonReactStrictModeCompliant = true;

ProGalleryMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!'
  },
});
