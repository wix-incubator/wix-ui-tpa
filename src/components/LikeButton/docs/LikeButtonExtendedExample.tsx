import * as React from 'react';
import { LikeButton } from '../LikeButton';
import { classes } from './LikeButtonExtendedExample.st.css';

interface State {
  checked: boolean;
  counter: number;
}

export class LikeButtonExtendedExample extends React.Component<{}, State> {
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
