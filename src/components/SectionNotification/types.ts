import { TPAComponentProps } from '../../types';

export interface SectionNotificationProps extends TPAComponentProps {
  type?: string;
  children?: React.ReactNode;
}

export interface SectionNotificationDefaultProps {
  type: string;
  'data-hook'?: string;
}

export interface SectionNotificationIconProps extends TPAComponentProps {
  icon?: React.ReactNode;
}

export interface SectionNotificationTextProps extends TPAComponentProps {}

export interface SectionNotificationButtonProps extends TPAComponentProps {
  type?: string;
  children?: React.ReactNode;
}

export enum BUTTON_TYPE {
  default = 'default',
  text = 'text',
}

export enum NOTIFICATION_TYPE {
  default = 'default',
  error = 'error',
}
