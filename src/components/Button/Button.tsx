import * as React from 'react';
import style from './Button.st.css';
import { ButtonNext } from 'wix-ui-core/button-next';
import { ButtonProps as ButtonNextProps } from 'wix-ui-core/dist/src/components/button-next/button-next';
import {withWixUiTpaConfig, WixUiTpaConfigProps} from '../WixUiTpaConfig';
import {TextProps} from '../Text';

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

export interface ButtonProps extends ButtonNextProps, WixUiTpaConfigProps {
  priority?: PRIORITY;
  size?: SIZE;
  fullWidth?: boolean;
}

const Button = withWixUiTpaConfig<ButtonProps>(({
  priority,
  size,
  fullWidth,
  mobile,
  ...rest
}: ButtonProps) => (
  <ButtonNext
    {...rest}
    {...style('root', { priority, size, fullWidth, mobile }, rest)}
  />
));

Button.displayName = 'Button';

Button.defaultProps = {
  priority: PRIORITY.basic,
  size: SIZE.medium,
  fullWidth: false,
};

export { Button };
