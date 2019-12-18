import { ShareButton } from '.';
import Registry from '@ui-autotools/registry';

const ShareButtonMetadata = Registry.getComponentMetadata(ShareButton);
ShareButtonMetadata.nonReactStrictModeCompliant = true;

ShareButtonMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});
