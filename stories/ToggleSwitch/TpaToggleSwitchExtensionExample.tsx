import * as React from 'react';
import {TpaToggleSwitch} from '../../src';

import {ToggleSwitchProps} from 'wix-ui-core/dist/src/components/ToggleSwitch';
import toggleSwitchStylesExt from './ToggleSwitchExt.st.css';
import {withStylable} from 'wix-ui-core/dist/src';
import * as styles from './ToggleSwtichStory.scss';

const TpaToggleSwitchExt = withStylable<ToggleSwitchProps>(TpaToggleSwitch, toggleSwitchStylesExt, () => null);

export class TpaToggleSwitchExtensionExample extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      disabled: false
    };
  }

  render() {
    return <div className={styles.root}>
      <TpaToggleSwitchExt  onChange={() => this.setState({checked: !this.state.checked})}
                           disabled={this.state.disabled}
                           checked={this.state.checked}/>
      <input className={styles.checkbox} id="disabled-ext" type="checkbox" onClick={() => this.setState({disabled: !this.state.disabled})}/>
      <label htmlFor="disabled-ext">Set Disabled</label>
    </div>;
  }
}
