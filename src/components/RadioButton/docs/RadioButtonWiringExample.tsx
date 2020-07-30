import * as React from 'react';
import { RadioButton } from '../';
import { st, classes } from './RadioButtonWiringExample.st.css';

interface IState {
  isChecked: boolean;
  label: string;
}

class RadioButtonWiringExample extends React.Component<{}, IState> {
  state = {
    label: 'Click for laugh',
    isChecked: false,
  };
  handleChange = event => {
    this.setState(prevState => {
      const label = prevState.isChecked
        ? 'Click for laughs'
        : 'My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.WHAT?';
      return {
        isChecked: !prevState.isChecked,
        label,
      };
    });
  };

  render() {
    const { label, isChecked } = this.state;
    return (
      <RadioButton
        label={label}
        checked={isChecked}
        onChange={this.handleChange}
        value={label}
        className={st(classes.root)}
      />
    );
  }
}

export default RadioButtonWiringExample;
