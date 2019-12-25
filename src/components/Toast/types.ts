import { TPAComponentProps } from '../../types';

export enum TOAST_SKIN {
  status = 'status',
  success = 'success',
  error = 'error',
}

export enum TOAST_PLACEMENT {
  inline = 'inline',
  bottomFullWidth = 'bottomFullWidth',
}

export interface ToastProps extends TPAComponentProps {
  /** Define the styles for toast */
  skin: TOAST_SKIN;
  /** Is toast visible or not. For correct animation we should keep element in the DOM all time*/
  isShown?: boolean;
  /** Define appearing and disappearing toast. Should it be animated or not */
  shouldAnimate?: boolean;
  shouldShowCloseButton?: boolean;
  /** Callback function, will be called when click on close button */
  onClose?(event: MouseEvent): void;
  placement?: TOAST_PLACEMENT;
}

export interface DefaultProps {
  shouldShowCloseButton: boolean;
  isShown: boolean;
}
