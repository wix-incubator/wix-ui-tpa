import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import styles from './{%ComponentName%}.st.css';

export interface {%ComponentName%}Props {
  dataHook?: string;
  buttonText: string;
}

interface DefaultProps {
  buttonText: string;
}

interface State {
  count: number;
}

/** {%description%} */
export class {%ComponentName%} extends React.Component<{%ComponentName%}Props, State> {
  static displayName = '{%ComponentName%}';
  static defaultProps: DefaultProps = { buttonText: 'Click me!' };

  state = { count: 0 };

  _handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const { count } = this.state;
    const { dataHook, buttonText } = this.props;
    const isEven = count % 2 === 0;

    return (
      <div className={styles.root} data-hook={dataHook}>
        <Text>
          You clicked this button {isEven ? 'even' : 'odd'} number (
          <span
            {...styles('number', { even: isEven, odd: !isEven }, this.props)}
          >
            {count}
          </span>
          ) of times
        </Text>

        <div className={styles.button}>
          <Button onClick={this._handleClick}>{buttonText}</Button>
        </div>
      </div>
    );
  }
}
