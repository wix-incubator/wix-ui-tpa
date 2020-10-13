import { TPAComponentProps } from '../../../types';
import * as React from 'react';

export interface ModalProps extends TPAComponentProps {
  isOpen: boolean;
  onRequestClose?(): void;
  shouldCloseOnClickOutside?: boolean;
  shouldCloseOnEsc?: boolean;
  focusTrap?: boolean;
  children?: React.ReactNode;
}

export interface ModalDefaultProps {
  isOpen: boolean;
  shouldCloseOnClickOutside: boolean;
  shouldCloseOnEsc: boolean;
  focusTrap: boolean;
}
