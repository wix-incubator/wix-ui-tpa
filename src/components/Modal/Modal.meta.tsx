import { Modal, ModalProps } from '.';
import Registry from '@ui-autotools/registry';
import {bigContent} from "./helpers";

const ModalMetadata = Registry.getComponentMetadata(Modal);
ModalMetadata.nonReactStrictModeCompliant = true;

ModalMetadata.addSim({
  title: 'Minimal height',
  props: {
    isOpen: true,
    onRequestClose: () => {},
    children: ['Hello from modal'],
  } as ModalProps,
});

ModalMetadata.addSim({
  title: 'Maximum height',
  props: {
    isOpen: true,
    onRequestClose: () => {},
    children: bigContent,
  } as ModalProps,
});

ModalMetadata.addSim({
  title: 'Without button',
  props: {
    isOpen: true,
    onRequestClose: () => {},
    withCloseButton: false,
  } as ModalProps,
});


ModalMetadata.addSim({
  title: 'Without background',
  props: {
    isOpen: true,
    onRequestClose: () => {},
    withBackground: false,
  } as ModalProps,
});
