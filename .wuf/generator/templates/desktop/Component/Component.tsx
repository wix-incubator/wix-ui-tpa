import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import { st, classes } from './{%ComponentName%}.st.css';

export interface {%ComponentName%}Props {
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
    const { buttonText, ...rest } = this.props;
    const isEven = count % 2 === 0;

    return (
      <div className={st(classes.root)}>
        <Text className={st(classes.number, { even: isEven, odd: !isEven })}>
          You clicked this button {isEven ? 'even' : 'odd'} number ({count}) of
          times
        </Text>

        <div className={classes.button}>
          <Button onClick={this._handleClick}>{buttonText}</Button>
        </div>
      </div>
    );
  }
}
