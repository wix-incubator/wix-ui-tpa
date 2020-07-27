import * as React from 'react';
import { IconToggle } from '../IconToggle';
import { classes } from './IconToggleExtendedExample.st.css';
import { ReactComponent as StarIcon } from '../../../assets/icons/Star.svg';

interface State {
  checked: boolean;
  counter: number;
}

export class IconToggleExtendedExample extends React.Component<{}, State> {
  state = { checked: false, counter: 0 };

  handleChange = ({ checked }) =>
    this.setState(({ counter }) => ({
      checked,
      counter: checked ? counter + 1 : counter - 1,
    }));

  render = () => (
    <IconToggle
      icon={<StarIcon />}
      label={`${this.state.counter}`}
      onChange={this.handleChange}
      checked={this.state.checked}
      {...this.props}
      className={classes.root}
    />
  );
}
