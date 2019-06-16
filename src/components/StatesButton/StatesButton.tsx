import * as React from 'react';
import * as classNames from 'classnames';
import style from './StatesButton.st.css';
import { Button, ButtonProps, SIZE } from '../Button';
import { Check } from '../../icons/dist';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

export interface StatesButtonProps extends ButtonProps {
  disabled: boolean;
  text: string;
  dataHook?: string;
}

interface StatesButtonState {
  success: boolean;
}

export class StatesButton extends React.Component<
  StatesButtonProps,
  StatesButtonState
> {
  public buttonRef = React.createRef<HTMLButtonElement>();

  public state = {
    success: false,
  };

  public focus = () => {
    this.buttonRef.current.focus();
  };

  public async onProgressReset() {
    this.setState({ success: true });
    await delay(2000);
    this.setState({ success: false });
  }

  public render() {
    const { text, disabled, dataHook, ...rest } = this.props;
    const { success } = this.state;
    return (
      <Button
        data-hook={dataHook}
        disabled={disabled}
        {...rest}
        ref={this.buttonRef}
        {...style('root', {}, this.props)}
      >
        <div
          className={classNames(style.text, {
            [style.hideText]: success,
          })}
        >
          {text}
        </div>
        {success && (
          <div className={classNames(style.text, style.successIcon)}>
            <Check width="1em" height="1em" data-hook={'checkIcon'} />
          </div>
        )}
      </Button>
    );
  }
}
