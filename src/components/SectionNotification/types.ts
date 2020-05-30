import { TPAComponentProps } from '../../types';

export interface SectionNotificationProps extends TPAComponentProps {
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

export enum NOTIFICATION_TYPE {
  default = 'default',
  error = 'error',
  alert = 'alert',
}

export {
  BUTTON_PRIORITY,
  TEXT_BUTTON_PRIORITY,
  BUTTON_TYPE,
} from './Button/SectionNotificationButton';
