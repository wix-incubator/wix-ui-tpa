import * as React from 'react';
import { ToggleSwitch, ToggleSwitchProps } from '../ToggleSwitch';

export class ToggleSwitchExample extends React.Component<
  ToggleSwitchProps,
  {
    checked: boolean;
    disabled: boolean;
  }
> {
  constructor(props: ToggleSwitchProps) {
    super(props);

    this.state = {
      checked: false,
      disabled: false,
    };
  }

  render() {
    return (
      <div>
        <ToggleSwitch
          onChange={() => this.setState({ checked: !this.state.checked })}
          disabled={this.state.disabled}
          checked={this.state.checked}
        />
        <input
          id="disabled"
          type="checkbox"
          onClick={() => this.setState({ disabled: !this.state.disabled })}
          style={{ marginLeft: '15px' }}
        />
        <label htmlFor="disabled">Set Disabled</label>
      </div>
    );
  }
}
