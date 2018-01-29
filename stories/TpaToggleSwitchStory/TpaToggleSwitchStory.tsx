import * as React from 'react';
import {TpaToggleSwitch} from '../../src/index';
import {ToggleSwitchProps} from 'wix-ui-core/dist/src/components/ToggleSwitch';
import toggleSwitchStylesExt from './ToggleSwitchExt.st.css';
import {withStylable} from 'wix-ui-core/dist/src';

const TpaToggleSwitchExt = withStylable<ToggleSwitchProps>(TpaToggleSwitch, toggleSwitchStylesExt, () => null);

export class TpaToggleSwitchStory extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  render() {
    return <div>
      <div>Default component:</div>
      <TpaToggleSwitch onChange={() => this.setState({checked: !this.state.checked})}
                       checked={this.state.checked}/>
      <div style={{marginTop: '24px'}}>Extended Component:</div>
      <TpaToggleSwitchExt onChange={() => this.setState({checked: !this.state.checked})}
                       checked={this.state.checked}/>
    </div>;
  }
}
