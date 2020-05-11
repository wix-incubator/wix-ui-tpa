import * as React from 'react';
import { st, classes } from './CopyUrlButton.st.css';
import { Check, SocialIcons } from '../../assets/icons';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Toast, TOAST_SKIN, TOAST_PLACEMENT } from '../Toast';
import { SocialBarIcon, SocialBarIconProps } from '../SocialBar/SocialBarIcon';
import { SocialBarTheme } from '../SocialBar/SocialBar';
import { Omit } from '../../types';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

export interface CopyUrlButtonProps extends Omit<SocialBarIconProps, 'icon'> {
  icon?: SocialBarIconProps['icon']; //make it optional
  url: string;
  successText: string;
  tooltipText: string;
}

interface CopyUrlButtonState {
  success: boolean;
}

interface DefaultProps {
  socialBarTheme: SocialBarTheme;
}

export class CopyUrlButton extends React.Component<
  CopyUrlButtonProps,
  CopyUrlButtonState
> {
  static defaultProps: DefaultProps = { socialBarTheme: 'light' };

  state: CopyUrlButtonState = { success: false };
  inputRef = React.createRef<HTMLInputElement>();

  renderSuccess = ({ mobile }: { mobile: boolean }) => {
    const { successText } = this.props;

    if (mobile) {
      return (
        <Toast
          skin={TOAST_SKIN.success}
          placement={TOAST_PLACEMENT.bottomFullWidth}
          shouldAnimate
          isShown
        >
          <div className={classes.successMobile}>
            <Check height={13} width={13} />
            <span className={classes.successTextMobile}>{successText}</span>
          </div>
        </Toast>
      );
    }
    return (
      <div className={classes.success}>
        <Check className={classes.checkIcon} height={19} width={19} />
        <span className={classes.successText}>{successText}</span>
      </div>
    );
  };
  onButtonClick: SocialBarIconProps['onClick'] = async event => {
    if (document.queryCommandSupported('copy')) {
      this.inputRef.current.select();
      document.execCommand('copy');
    }

    if (this.props.onClick) {
      this.props.onClick(event);
    }
    this.setState({ success: true });
    await delay(2000);
    this.setState({ success: false });
  };

  renderIconButton = ({ mobile }: { mobile: boolean }) => {
    const { success } = this.state;
    const {
      tooltipText,
      socialBarTheme,
      url,
      successText,
      ...otherProps
    } = this.props;

    if (success && !mobile) {
      return null;
    }

    return (
      <SocialBarIcon
        tooltip={tooltipText}
        socialBarTheme={socialBarTheme}
        icon={<SocialIcons.CopyLink />}
        as="button"
        {...otherProps}
        onClick={this.onButtonClick}
      />
    );
  };

  render() {
    const { success } = this.state;
    const { url, socialBarTheme, className } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            className={st(classes.root, { theme: socialBarTheme }, className)}
            data-hook={this.props['data-hook']}
          >
            <input
              className={classes.copyInput}
              ref={this.inputRef}
              value={url}
              readOnly
              aria-hidden="true"
              tabIndex={-1}
            />
            {this.renderIconButton({ mobile })}
            {success && this.renderSuccess({ mobile })}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
