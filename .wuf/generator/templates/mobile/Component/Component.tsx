import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { Text } from '../Text';
import { Button } from '../Button';
import { st, classes } from './{%ComponentName%}.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface {%ComponentName%}Props extends TPAComponentProps {
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
    const { className, buttonText } = this.props;
    const isEven = count % 2 === 0;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div className={st(classes.root, { mobile }, className)} data-mobile={mobile} data-hook={this.props['data-hook']}>
            <Text className={st(classes.number, { even: isEven, odd: !isEven })}>
              You clicked this button {isEven ? 'even' : 'odd'} number ({count})
              of times
            </Text>

            <div className={classes.button}>
              <Button onClick={this._handleClick}>{buttonText}</Button>
            </div>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
