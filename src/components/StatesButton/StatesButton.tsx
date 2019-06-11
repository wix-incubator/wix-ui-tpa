import * as React from 'react';
import * as classNames from 'classnames';
import style from './StatesButton.st.css';
import { Button, SIZE } from '../Button';
import { Check } from '../../icons/dist';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

export interface StatesButtonProps {
  className?: string;
  disabled: boolean;
  onClick: Function;
  text: string;
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

  public async onActionSuccess() {
    this.setState({ success: true });
    await delay(2000);
    this.setState({ success: false });
  }

  private readonly onClick = () => {
    this.props.onClick();
  };

  public render() {
    const { text, disabled, className } = this.props;
    const { success } = this.state;
    return (
      <Button
        data-hook="states-button"
        className={className ? className : null}
        disabled={disabled}
        size={SIZE.large}
        onClick={this.onClick}
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
            <Check data-hook={'checkIcon'} />
          </div>
        )}
      </Button>
    );
  }
}
