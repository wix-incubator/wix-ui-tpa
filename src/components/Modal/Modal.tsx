import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import { st, classes } from './Modal.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface ModalProps {
  buttonText: string;
}

interface DefaultProps {
  buttonText: string;
}

interface State {
  count: number;
}

/** ... modal */
export class Modal extends React.Component<ModalProps, State> {
  static displayName = 'Modal';
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
