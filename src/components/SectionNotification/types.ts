export interface SectionNotificationProps {
  type?: string;
  icon?: React.ReactNode;
  text: string;
  controls?: /* supported only for type "default" */
  React.ReactNode | React.ReactNode[];
}

export enum NOTIFICATION_TYPE {
  default = 'default',
  error = 'error',
}

export interface SectionNotificationDefaultProps {
  type: string;
  'data-hook'?: string;
}
