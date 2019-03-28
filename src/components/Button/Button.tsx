import * as React from 'react';
import style from './Button.st.css';
import { ButtonNext } from 'wix-ui-core/button-next';
import { ButtonProps as ButtonNextProps } from 'wix-ui-core/dist/src/components/button-next/button-next';

export enum PRIORITY {
  basic = 'basic',
  primary = 'primary',
  secondary = 'secondary',
}

export enum SIZE {
  tiny = 'tiny',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface ButtonProps extends ButtonNextProps {
  priority?: PRIORITY;
  size?: SIZE;
}

const CoreButton: React.FunctionComponent<ButtonProps> = ({
  priority,
  size,
  ...rest
}) => <ButtonNext {...rest} {...style('root', { priority, size }, rest)} />;

CoreButton.defaultProps = {
  priority: PRIORITY.basic,
  size: SIZE.medium,
};

export const Button: React.FunctionComponent<ButtonProps> = CoreButton;
