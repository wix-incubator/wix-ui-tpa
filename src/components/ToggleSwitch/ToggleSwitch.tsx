import * as React from 'react';
import style from './ToggleSwitch.st.css';
import {
  ToggleSwitch as CoreToggleSwitch,
  ToggleSwitchProps as CoreToggleSwitchProps,
} from 'wix-ui-core/toggle-switch';

import {
  TPAComponentsContext,
  TPAComponentsConsumer,
} from '../TPAComponentsConfig';

export interface ToggleSwitchProps extends CoreToggleSwitchProps {}

export class ToggleSwitch extends React.Component<ToggleSwitchProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'ToggleSwitch';
  static defaultProps = { ...CoreToggleSwitch.defaultProps };

  render() {
    const { checked, disabled, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <CoreToggleSwitch
            checked={checked}
            disabled={disabled}
            {...rest}
            {...style('root', { checked, disabled, mobile }, rest)}
          />
        )}
      </TPAComponentsConsumer>
    );
  }
}
