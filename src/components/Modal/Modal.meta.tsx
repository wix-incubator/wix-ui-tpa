import {Modal, ModalProps} from '.';
import Registry from '@ui-autotools/registry';

const ModalMetadata = Registry.getComponentMetadata(Modal);
ModalMetadata.nonReactStrictModeCompliant = true;

ModalMetadata.addSim({
  title: 'render',
  props: {
    isOpen: true,
    onRequestClose: () => {},
    children: ['Hello from modal']
  } as ModalProps,
});