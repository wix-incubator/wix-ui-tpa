import { TPAComponentProps } from '../../types';
import * as React from 'react';

export interface ModalProps extends TPAComponentProps {
  isOpen: boolean;
  onRequestClose?(): void;
  contentClassName?: string;
  closeOnClickOutside?: boolean;
  focusTrap?: boolean;
  children?: React.ReactNode;
}

export interface ModalDefaultProps {
  isOpen: boolean;
  closeOnClickOutside: boolean;
  focusTrap: boolean;
}
