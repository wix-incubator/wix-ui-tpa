import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import { st, classes } from './ActionsMenu.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface ActionsMenuProps {
  buttonText: string;
}

interface DefaultProps {
  buttonText: string;
}

interface State {
  count: number;
}

/** A popover menu with a list of actions */
export class ActionsMenu extends React.Component<ActionsMenuProps, State> {
  static displayName = 'ActionsMenu';
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
          <div className={st(classes.root, { mobile }, rest)} data-mobile={mobile}>
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
