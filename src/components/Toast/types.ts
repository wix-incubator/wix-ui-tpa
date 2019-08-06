export enum TOAST_SKIN {
  status = 'status',
  success = 'success',
  error = 'error',
}

export interface ToastProps {
  /** Define the styles for toast */
  skin: TOAST_SKIN;
  shouldShowCloseButton?: boolean;
  /** Callback function, will be called when click on close button */
  onClose?(event: MouseEvent): void;
}

export interface DefaultProps {
  shouldShowCloseButton: boolean;
}
