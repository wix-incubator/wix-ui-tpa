import * as React from 'react';
import styles from './ShareButton.st.css';
import { ButtonProps } from '../Button';
import { ButtonNext } from 'wix-ui-core/button-next';
import { Omit } from '../../types';

export interface ShareButtonProps extends Omit<ButtonProps, 'onClick'> {
  onClick(sharePromise: Promise<void> | undefined): void;
  url: string;
  text?: string;
  title?: string;
}

declare global {
  interface Navigator {
    share(data: { url: string; text?: string; title?: string }): Promise<void>;
  }
}

/** Opens navigator.share where available */
export class ShareButton extends React.Component<ShareButtonProps> {
  static displayName = 'ShareButton';

  onButtonClick: ButtonProps['onClick'] = () => {
    let sharePromise: Promise<void> | undefined;
    const { url, text, title } = this.props;
    const data = { url, text, title };

    if (navigator.share) {
      sharePromise = navigator.share(data);
    }
    this.props.onClick(sharePromise);
  };

  render() {
    const { ...rest } = this.props;
    return (
      <ButtonNext
        {...styles('root', {}, rest)}
        {...rest}
        onClick={this.onButtonClick}
      />
    );
  }
}
