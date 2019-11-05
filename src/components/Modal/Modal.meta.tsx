import { Modal } from '.';
import Registry from '@ui-autotools/registry';

const ModalMetadata = Registry.getComponentMetadata(Modal);
ModalMetadata.nonReactStrictModeCompliant = true;

ModalMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});
