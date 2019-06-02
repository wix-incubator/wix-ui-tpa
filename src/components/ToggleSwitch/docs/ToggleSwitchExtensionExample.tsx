import * as React from 'react';
import { ToggleSwitchProps } from 'wix-ui-core/toggle-switch';
import { withStylable } from 'wix-ui-core/withStylable';

import { ToggleSwitch } from '..';
import toggleSwitchStylesExt from './ToggleSwitchExt.st.css';
import * as styles from './ToggleSwtichStory.scss';

const ToggleSwitchExt = withStylable<ToggleSwitchProps>(
  ToggleSwitch,
  toggleSwitchStylesExt,
  () => null,
);

export class ToggleSwitchExtensionExample extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      disabled: false,
    };
  }

  render() {
    return (
      <div className={styles.root}>
        <ToggleSwitchExt
          onChange={() => this.setState({ checked: !this.state.checked })}
          disabled={this.state.disabled}
          checked={this.state.checked}
        />
        <input
          className={styles.checkbox}
          id="disabled-ext"
          type="checkbox"
          onClick={() => this.setState({ disabled: !this.state.disabled })}
        />
        <label htmlFor="disabled-ext">Set Disabled</label>
      </div>
    );
  }
}
