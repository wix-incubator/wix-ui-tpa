import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import styles from './FloatingDropdown.st.css';

export interface FloatingDropdownProps {
  buttonText: string;
}

interface DefaultProps {
  buttonText: string;
}

interface State {
  count: number;
}

/** Dropdown component for sort. */
export class FloatingDropdown extends React.Component<
  FloatingDropdownProps,
  State
> {
  static displayName = 'FloatingDropdown';
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
      <div {...styles('root', {}, rest)}>
        <Text {...styles('number', { even: isEven, odd: !isEven })}>
          You clicked this button {isEven ? 'even' : 'odd'} number ({count}) of
          times
        </Text>

        <div className={styles.button}>
          <Button onClick={this._handleClick}>{buttonText}</Button>
        </div>
      </div>
    );
  }
}
