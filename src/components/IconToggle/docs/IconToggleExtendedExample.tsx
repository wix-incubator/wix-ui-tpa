import * as React from 'react';
import { IconToggle } from '../IconToggle';
import extendedStyles from './IconToggleExtendedExample.st.css';

export class IconToggleExtendedExample extends React.Component {
  state = { checked: false };

  handleChange = ({ checked }) => this.setState({ checked });

  render = () => (
    <IconToggle
      onChange={this.handleChange}
      checked={this.state.checked}
      {...this.props}
      {...extendedStyles('root', {}, this.props)}
    />
  );
}
