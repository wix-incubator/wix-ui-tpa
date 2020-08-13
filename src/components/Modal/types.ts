import { TPAComponentProps } from '../../types';
import { RefObject } from 'react';

export interface ModalProps extends TPAComponentProps {
  isOpen: boolean;
  rootElement: HTMLElement;
  onClose?(): void;
  contentClassName?: string;
  closeOnClickOutside?: boolean;
  minHeight?: string;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  closeButtonRef?: RefObject<any>;
  focusTrap?: boolean;
}

export interface ModalDefaultProps {
  isOpen: boolean;
  closeOnClickOutside: boolean;
  minHeight: string;
  maxHeight: string;
  minWidth: string;
  maxWidth: string;
  focusTrap: boolean;
}

export interface ModalState {
  isCloseInProgress: boolean;
}
