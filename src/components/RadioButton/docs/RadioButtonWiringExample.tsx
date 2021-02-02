import * as React from 'react';
import { RadioButton, RadioButtonTheme } from '../';
import { classes, st } from './RadioButtonWiringExample.st.css';

interface IState {
  isChecked: boolean;
}
const label = 'I am label';

class RadioButtonWiringExample extends React.Component<{}, IState> {
  state = {
    isChecked: false,
  };
  handleChange = () => {
    this.setState((prevState) => {
      return {
        isChecked: !prevState.isChecked,
      };
    });
  };

  render() {
    const { isChecked } = this.state;
    return (
      <>
        <RadioButton
          label={label}
          checked={isChecked}
          onChange={this.handleChange}
          value={label}
          className={st(classes.root)}
        />
        <br />
        <RadioButton
          label={label}
          checked={isChecked}
          theme={RadioButtonTheme.Box}
          onChange={this.handleChange}
          value={label}
          className={st(classes.root)}
        />
      </>
    );
  }
}

export default RadioButtonWiringExample;
