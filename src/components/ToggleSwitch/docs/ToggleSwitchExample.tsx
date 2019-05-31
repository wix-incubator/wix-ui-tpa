import * as React from 'react';
import { ToggleSwitch } from '..';
import * as styles from './ToggleSwtichStory.scss';

export class ToggleSwitchExample extends React.Component<any, any> {
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
        <ToggleSwitch
          onChange={() => this.setState({ checked: !this.state.checked })}
          disabled={this.state.disabled}
          checked={this.state.checked}
        />
        <input
          className={styles.checkbox}
          id="disabled"
          type="checkbox"
          onClick={() => this.setState({ disabled: !this.state.disabled })}
        />
        <label htmlFor="disabled">Set Disabled</label>
      </div>
    );
  }
}
