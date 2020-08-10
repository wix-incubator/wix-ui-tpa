import { TPAComponentProps } from '../../types';

export enum SPINNER_TYPES {
  regular = 'regular',
  slim = 'slim',
}

export interface SpinnerProps extends TPAComponentProps {
  type?: SPINNER_TYPES;
  width?: number;
}

export interface SpinnerDefaultProps {
  type: SPINNER_TYPES;
  width: number;
}

export interface SpinnerState {}
