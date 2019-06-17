import * as React from 'react';
import * as classNames from 'classnames';
import style from './StatesButton.st.css';
import { Button, ButtonProps, SIZE } from '../Button';

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
            <Check size="1em" data-hook={'checkIcon'} />
          </div>
        )}
      </Button>
    );
  }
}

const Check: React.FunctionComponent<{ size: string }> = ({ size, ...props }) => (
  <svg
    viewBox="0 0 16 12"
    fill="currentColor"
    width={size || '16'}
    height={size || '12'}
    {...props}
  >
    <g stroke="none" fill="none" strokeWidth="1" fillRule="evenodd">
      <g transform="translate(-58 -14)" fill="currentColor">
        <g transform="translate(54 8)">
          <path d="M18.3136362,7.71301485 L18.6360088,7.36934666 L18.6353838,7.34268869 L18.2990357,7.69884361 L18.3136362,7.71301485 Z M5.31339777,12.4034164 L5.31535398,12.4279974 L5.68535858,12.7239424 L5.69635283,12.7097196 L5.31339777,12.4034164 Z M18.2802035,6.28698515 L19.7009643,7.66597596 L10.3083211,17.6790879 L4.30364717,12.8763019 L5.51599094,11.3079495 L10.1177586,14.9886332 L18.2802035,6.28698515 Z" />
        </g>
      </g>
    </g>
  </svg>
);
