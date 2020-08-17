import { TPAComponentProps } from '../../types';

export enum SPINNER_TYPES {
  regular = 'regular',
  slim = 'slim',
}

export interface SpinnerProps extends TPAComponentProps {
  type?: SPINNER_TYPES;
  diameter?: number;
  isCentered?: boolean;
  isStatic?: boolean;
}

export interface SpinnerDefaultProps {
  type: SPINNER_TYPES;
  diameter: number;
  isCentered: boolean;
  isStatic: boolean;
}

export interface SpinnerState {}
