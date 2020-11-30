import * as React from 'react';
import classnames from 'classnames';
import { st, classes } from './Button.st.css';
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

  _wrapAffix = (icon, type) => {
    return (
      <span className={classnames(classes[`${type}-icon`], classes.affixIcon)}>
        {icon}
      </span>
    );
  };

  _getAffixes = () => {
    const { prefixIcon, suffixIcon } = this.props;

    return {
      prefixIcon: prefixIcon
        ? this._wrapAffix(prefixIcon, 'prefix')
        : undefined,
      suffixIcon: suffixIcon
        ? this._wrapAffix(suffixIcon, 'suffix')
        : undefined,
    };
  };

  render() {
    const {
      priority,
      size,
      fullWidth,
      innerRef,
      upgrade,
      children,
      className,
      ...rest
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ButtonNext
            {...this._getDataAttributes(mobile)}
            ref={innerRef}
            children={children}
            data-hook={this.props['data-hook']}
            className={st(
              classes.root,
              { priority, size, fullWidth, mobile, upgrade },
              className,
            )}
            {...rest}
            {...this._getAffixes()}
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
