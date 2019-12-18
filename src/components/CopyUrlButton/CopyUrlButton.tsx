import * as React from 'react';
import styles from './CopyUrlButton.st.css';
import socialBarStyles from '../SocialBar/SocialBar.st.css';
import { IconButton, IconButtonProps } from '../IconButton';
import { Share, Check } from '../../assets/icons';
import { Tooltip } from '../Tooltip';
import { TPAComponentProps } from '../../types';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Toast, TOAST_SKIN } from '../Toast';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

export interface CopyUrlButtonProps extends TPAComponentProps {
  url: string;
  successText: string;
  tooltipText: string;
  onClick?: IconButtonProps['onClick'];
}

interface CopyUrlButtonState {
  success: boolean;
}

export class CopyUrlButton extends React.Component<
  CopyUrlButtonProps,
  CopyUrlButtonState
> {
  state: CopyUrlButtonState = { success: false };
  inputRef = React.createRef<HTMLInputElement>();

  renderSuccess = ({ mobile }: { mobile: boolean }) => {
    const { successText } = this.props;

    if (mobile) {
      return (
        <Toast
          skin={TOAST_SKIN.success}
          placement="bottomFullWidth"
          shouldAnimate
          isShown
        >
          <div {...styles('success-mobile')}>
            <Check height={13} width={13} />
            <span {...styles('success-text-mobile')}>{successText}</span>
          </div>
        </Toast>
      );
    }
    return (
      <div {...styles('success')}>
        <Check {...socialBarStyles('themed-icon')} height={17} width={17} />
        <span {...styles('success-text')}>{successText}</span>
      </div>
    );
  };
  onButtonClick: IconButtonProps['onClick'] = async event => {
    if (!document.queryCommandSupported('copy')) {
      return;
    }

    this.inputRef.current.select();
    document.execCommand('copy');

    if (this.props.onClick) {
      this.props.onClick(event);
    }
    this.setState({ success: true });
    await delay(2000);
    this.setState({ success: false });
  };

  renderIconButton = ({ mobile }: { mobile: boolean }) => {
    const { success } = this.state;
    const { tooltipText } = this.props;

    if (success && !mobile) {
      return null;
    }

    return (
      <Tooltip
        appendTo="scrollParent"
        content={tooltipText}
        placement="bottom"
        disabled={mobile}
      >
        <IconButton as="button" icon={<Share />} onClick={this.onButtonClick} />
      </Tooltip>
    );
  };

  render() {
    const { success } = this.state;
    const { url, ...oherProps } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles('root', {}, oherProps)}>
            <input
              {...styles('copy-input')}
              ref={this.inputRef}
              value={url}
              readOnly
            />
            {this.renderIconButton({ mobile })}
            {success && this.renderSuccess({ mobile })}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
