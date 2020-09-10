import { Dialog } from '.';
import Registry from '@ui-autotools/registry';

const DialogMetadata = Registry.getComponentMetadata(Dialog);
DialogMetadata.nonReactStrictModeCompliant = true;

DialogMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!'
  },
});
