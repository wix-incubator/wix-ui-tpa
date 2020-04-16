import * as React from 'react';
import style from './Button.st.css';
import { ButtonNext } from 'wix-ui-core/button-next';
import { ButtonProps as ButtonNextProps } from 'wix-ui-core/dist/src/components/button-next/button-next';
import {
  TPAComponentsContext,
  TPAComponentsConsumer,
} from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';
import { deprecationLog } from '../../common/deprecationLog';

export enum PRIORITY {
  basic = 'basic',
  primary = 'primary',
  secondary = 'secondary',
  basicSecondary = 'basicSecondary',
}

export enum SIZE {
  tiny = 'tiny',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface ButtonProps extends ButtonNextProps, TPAComponentProps {
  priority?: PRIORITY;
  size?: SIZE;
  fullWidth?: boolean;
  innerRef?: React.RefObject<HTMLButtonElement>;
  upgrade?: boolean;
}

class ButtonComponent extends React.Component<ButtonProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Button';
  static defaultProps = {
    priority: PRIORITY.basic,
    size: SIZE.medium,
    fullWidth: false,
    upgrade: false,
  };

  componentDidMount(): void {
    if (!this.props.upgrade) {
      deprecationLog(
        'Button',
        'The current `Button` component API will be deprecated in the next major version. Please use the `upgrade` prop in order to use the new API.',
      );
    }
  }

  _getDataAttributes(mobile) {
    const { fullWidth } = this.props;

    return {
      'data-fullwidth': fullWidth,
      'data-mobile': mobile,
    };
  }

  render() {
    const {
      priority,
      size,
      fullWidth,
      innerRef,
      upgrade,
      children,
      ...rest
    } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ButtonNext
            {...this._getDataAttributes(mobile)}
            ref={innerRef}
            {...rest}
            children={children}
            {...style(
              'root',
              { priority, size, fullWidth, mobile, upgrade },
              rest,
            )}
          />
        )}
      </TPAComponentsConsumer>
    );
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref: React.RefObject<HTMLButtonElement>) => (
    <ButtonComponent {...props} innerRef={ref} />
  ),
);
