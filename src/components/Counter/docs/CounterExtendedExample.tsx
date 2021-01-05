import * as React from 'react';
import { classes } from './CounterExtendedExample.st.css';
import { Counter, CounterSize } from '../Counter';

interface State {
  value: number;
}

export class CounterExtendedExample extends React.Component<{}, State> {
  state = { value: 10 };

  handleChange = (num: string) => {
    let value;
    try {
      value = Number(num);
      this.setState({ value });
    } catch (e) {}
  };

  render = () => (
    <>
      <h3>Counter with no limits</h3>
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={this.handleChange}
        value={this.state.value}
        {...this.props}
        className={classes.root}
      />
      <h3>Disabled Counter</h3>
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={this.handleChange}
        value={this.state.value}
        {...this.props}
        disabled
        className={classes.root}
      />
      <h3>Counter with a max value of 15, and a min value of -5</h3>
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={this.handleChange}
        value={this.state.value}
        max={15}
        min={-5}
        {...this.props}
        className={classes.root}
      />
      <h3>xSmall Counter</h3>
      <Counter
        inputAriaLabel={'amount'}
        incrementAriaLabel={'increment'}
        decrementAriaLabel={'decrement'}
        onChange={this.handleChange}
        value={this.state.value}
        size={CounterSize.xSmall}
        max={999}
        min={-999}
        {...this.props}
        className={classes.root}
      />
    </>
  );
}
