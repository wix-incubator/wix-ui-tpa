export {
  BUTTON_PRIORITY,
  TEXT_BUTTON_PRIORITY,
} from './Button/SectionNotificationButton';

export enum BUTTON_TYPE {
  default = 'default',
  text = 'text',
}

export enum NOTIFICATION_TYPE {
  default = 'default',
  error = 'error',
}

export interface SectionNotificationProps {
  type?: string;
  children?: React.ReactNode;
}

export interface SectionNotificationDefaultProps {
  type: string;
}

export interface SectionNotificationIconProps {
  icon?: React.ReactNode;
  className?: string;
}

export interface SectionNotificationTextProps {
  className?: string;
}

export interface SectionNotificationButtonProps {
  type?: string;
  children?: React.ReactNode;
}
