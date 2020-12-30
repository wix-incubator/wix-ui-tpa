import * as React from 'react';
import * as classNames from 'classnames';
import { st, classes } from './StatesButton.st.css';
import { Button, ButtonProps } from '../Button';
import { TPAComponentProps } from '../../types';
import { BUTTON_STATES } from './constants';
import { deprecationLog, wrap, unwrap } from '../../common/deprecationLog';
import Timeout = NodeJS.Timeout;

export interface StatesButtonProps extends ButtonProps, TPAComponentProps {
  state: BUTTON_STATES;
  disabled?: boolean;
  idleContent: string | React.ReactElement;
  failureContent?: string | React.ReactElement;
  inProgressContent?: string | React.ReactElement;
  successContent?: string | React.ReactElement;
  /** A callback that will run 2 seconds after entering success/failure mode. This is usually used to trigger a change back to idle state. */
  onNotificationEnd?: Function;
}

export class StatesButton extends React.Component<StatesButtonProps> {
  private timer: Timeout;

  constructor(props) {
    super(props);
    wrap('Button');
  }

  componentDidMount(): void {
    if (!this.props.upgrade) {
      deprecationLog(
        'StatesButton',
        'The current `StatesButton` component API will be deprecated in the next major version. Please use the `upgrade` prop in order to use the new API.',
      );
      unwrap('Button');
    }
  }

  componentDidUpdate = ({ state: prevState }: StatesButtonProps) => {
    const { state: currentState, onNotificationEnd } = this.props;

    if (currentState !== prevState) {
      clearTimeout(this.timer);
    }

    if (
      (currentState === BUTTON_STATES.SUCCESS &&
        prevState !== BUTTON_STATES.SUCCESS) ||
      (currentState === BUTTON_STATES.FAILURE &&
        prevState !== BUTTON_STATES.FAILURE)
    ) {
      this.timer = setTimeout(
        () => onNotificationEnd && onNotificationEnd(),
        2000,
      );
    }
  };

  public buttonRef = React.createRef<HTMLButtonElement>();

  public focus = () => {
    this.buttonRef.current.focus();
  };

  private readonly debounceOnClick = (e) => {
    const { state, onClick } = this.props;
    if (state === BUTTON_STATES.IDLE) {
      onClick(e);
    }
  };

  private renderCheck() {
    return (
      <div className={classNames(classes.successIcon)}>
        <Check size="1em" data-hook={'checkIcon'} />
      </div>
    );
  }

  private renderContent(): React.ReactElement | string {
    const {
      state,
      idleContent,
      inProgressContent,
      failureContent,
      successContent,
    } = this.props;

    switch (state) {
      case BUTTON_STATES.IDLE:
        return idleContent;
      case BUTTON_STATES.IN_PROGRESS:
        return inProgressContent;
      case BUTTON_STATES.FAILURE:
        return failureContent;
      case BUTTON_STATES.SUCCESS:
        return successContent ? successContent : this.renderCheck();
      default:
        return idleContent;
    }
  }

  public render() {
    const {
      state,
      disabled,
      onClick,
      idleContent,
      inProgressContent,
      failureContent,
      successContent,
      onNotificationEnd,
      upgrade,
      className,
      ...rest
    } = this.props;
    const inProgress = state === BUTTON_STATES.IN_PROGRESS;

    return (
      <Button
        className={st(classes.root, { upgrade }, className)}
        upgrade={upgrade}
        disabled={disabled}
        onClick={this.debounceOnClick}
        ref={this.buttonRef}
        aria-live="assertive"
        {...(inProgress && { 'aria-busy': true })}
        {...rest}
      >
        {this.renderContent()}
      </Button>
    );
  }
}

const Check: React.FunctionComponent<{ size: string }> = ({
  size,
  ...props
}) => (
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
