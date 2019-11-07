import { Modal } from '.';
import Registry from '@ui-autotools/registry';

const ModalMetadata = Registry.getComponentMetadata(Modal);
ModalMetadata.nonReactStrictModeCompliant = true;

ModalMetadata.addSim({
  title: 'Default',
  props: {
    isOpen: true,
    onRequestClose: () => {},
  },
});

ModalMetadata.addSim({
  title: 'Without button',
  props: {
    isOpen: true,
    onRequestClose: () => {},
    withCloseButton: false,
  },
});

ModalMetadata.addSim({
  title: 'Without background',
  props: {
    isOpen: true,
    onRequestClose: () => {},
    withBackground: false,
  },
});
