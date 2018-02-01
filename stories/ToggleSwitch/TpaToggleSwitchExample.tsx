import * as React from 'react';
import {TpaToggleSwitch} from '../../src';
import * as styles from './ToggleSwtichStory.scss';

export class TpaToggleSwitchExample extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      disabled: false
    };
  }

  render() {
    return <div className={styles.root}>
      <TpaToggleSwitch onChange={() => this.setState({checked: !this.state.checked})}
                       disabled={this.state.disabled}
                       checked={this.state.checked}/>
      <input className={styles.checkbox} id="disabled" type="checkbox"
             onClick={() => this.setState({disabled: !this.state.disabled})}/>
      <label htmlFor="disabled">Set Disabled</label>
    </div>;
  }
}
