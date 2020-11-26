import * as React from 'react';
import { LikeButton } from '../LikeButton';
import { classes } from './LikeButtonWiringExample.st.css';

interface State {
  checked: boolean;
  counter: number;
}

export class LikeButtonWiringExample extends React.Component<{}, State> {
  state = { checked: false, counter: 0 };

  handleChange = ({ checked }) =>
    this.setState(({ counter }) => ({
      checked,
      counter: checked ? counter + 1 : counter - 1,
    }));

  render = () => (
    <LikeButton
      label={`${this.state.counter}`}
      onChange={this.handleChange}
      checked={this.state.checked}
      {...this.props}
      className={classes.root}
    />
  );
}
