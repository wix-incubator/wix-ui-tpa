import { IconButton } from '.';
import Registry from '@ui-autotools/registry';

const IconButtonMetadata = Registry.getComponentMetadata(IconButton);
IconButtonMetadata.nonReactStrictModeCompliant = true;

IconButtonMetadata.addSim({
  title: 'render',
  props: {
    icon: null,
  },
});
