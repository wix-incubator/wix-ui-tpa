import * as React from 'react';
import style from './Button.st.css';
import { ButtonNext } from 'wix-ui-core/button-next';
import { ButtonProps as ButtonNextProps } from 'wix-ui-core/dist/src/components/button-next/button-next';
import {
  TPAComponentsContext,
  TPAComponentsConsumer,
} from '../TPAComponentsConfig';

import { withForwardRef, WithForwardRefProps } from '../WithForwardRef';

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

export interface ButtonProps
  extends ButtonNextProps,
    WithForwardRefProps<HTMLButtonElement> {
  priority?: PRIORITY;
  size?: SIZE;
  fullWidth?: boolean;
}

class ButtonComponent extends React.Component<ButtonProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Button';
  static defaultProps = {
    priority: PRIORITY.basic,
    size: SIZE.medium,
    fullWidth: false,
  };

  render() {
    const { priority, size, fullWidth, innerRef, ...rest } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ButtonNext
            ref={innerRef}
            {...rest}
            {...style('root', { priority, size, fullWidth, mobile }, rest)}
          />
        )}
      </TPAComponentsConsumer>
    );
  }
}

export const Button = withForwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent,
);
