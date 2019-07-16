import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import styles from './Rating.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface RatingProps {
  buttonText: string;
}

interface DefaultProps {
  buttonText: string;
}

interface State {
  count: number;
}

/** Rating component based on IconToggle */
export class Rating extends React.Component<RatingProps, State> {
  static displayName = 'Rating';
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
          <div {...styles('root', { mobile }, rest)}>
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
