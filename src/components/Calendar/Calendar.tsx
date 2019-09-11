import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import styles from './Calendar.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface CalendarProps {
  buttonText: string;
}

interface DefaultProps {
  buttonText: string;
}

interface State {
  count: number;
}

/** Component for showing some events of a particular week */
export class Calendar extends React.Component<
  CalendarProps,
  State
> {
  static displayName = 'Calendar';
  static defaultProps: DefaultProps = { buttonText: 'Click me!' };

  state = { count: 0 };

  _handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { count } = this.state;
    const { buttonText, ...rest } = this.props;
    const isEven = count % 2 === 0;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles('root', { mobile }, rest)} data-mobile={mobile}>
            <Text {...styles('number', { even: isEven, odd: !isEven })}>
              You clicked this button {isEven ? 'even' : 'odd'} number ({count})
              of times
            </Text>

            <div className={styles.button}>
              <Button onClick={this._handleClick}>{buttonText}</Button>
            </div>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
