import * as React from 'react';
import { Text } from '../Text';
import { Button } from '../Button';
import { RadioButton as CoreRadioButton } from 'wix-ui-core/radio-button';
import styles from './RadioButton.st.css';

export interface RadioButtonProps {
  buttonText: string;
}

interface DefaultProps {
  buttonText: string;
}

interface RadioButtonState {
  count: number;
}

/** RadioButton */
export class RadioButton extends React.Component<
  RadioButtonProps,
  RadioButtonState
> {
  static displayName = 'RadioButton';
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
        {/* <Text {...styles('number', { even: isEven, odd: !isEven })}>
          You clicked this button {isEven ? 'even' : 'odd'} number ({count}) of
          times
        </Text> */}
        <CoreRadioButton {...styles('root')} label={<p>Example</p>} />
        {/* <div className={styles.button}>
          <Button onClick={this._handleClick}>{buttonText}</Button>
        </div> */}
      </div>
    );
  }
}
