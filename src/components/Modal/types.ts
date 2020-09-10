import { TPAComponentProps } from '../../types';
import { RefObject } from 'react';

export interface ModalProps extends TPAComponentProps {
  isOpen: boolean;
  onRequestClose?(): void;
  contentClassName?: string;
  closeOnClickOutside?: boolean;
  focusTrap?: boolean;
}

export interface ModalDefaultProps {
  isOpen: boolean;
  closeOnClickOutside: boolean;
  focusTrap: boolean;
}
