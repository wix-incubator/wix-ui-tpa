import * as React from 'react';
import styles from './ShareButton.st.css';
import { ButtonProps } from '../Button';
import { Omit } from '../../types';
import {
  TextButton,
  TextButtonProps,
  TEXT_BUTTON_PRIORITY,
} from '../TextButton';
import { Share } from '../../assets/icons';

interface ShareData {
  url: string;
  text?: string;
  title?: string;
}

export interface ShareButtonProps
  extends Omit<TextButtonProps, 'onClick' | 'children'> {
  onClick(sharePromise: Promise<void> | undefined): void;
  shareData: ShareData;
  withIcon?: boolean;
  text?: React.ReactChild;
}

declare global {
  interface Navigator {
    share(data: ShareData): Promise<void>;
  }
}

/** Opens navigator.share where available */
export class ShareButton extends React.Component<ShareButtonProps> {
  static displayName = 'ShareButton';

  onButtonClick: ButtonProps['onClick'] = () => {
    let sharePromise: Promise<void> | undefined;
    const { shareData } = this.props;

    if (navigator.share) {
      sharePromise = navigator.share(shareData);
    }
    this.props.onClick(sharePromise);
  };

  render() {
    const { shareData, text, withIcon, ...rest } = this.props;
    return (
      <TextButton
        {...styles('root', { withIcon, withText: Boolean(text) }, rest)}
        priority={TEXT_BUTTON_PRIORITY.secondary}
        prefixIcon={withIcon ? <Share className={styles.icon} /> : undefined}
        {...rest}
        onClick={this.onButtonClick}
      >
        <div className={styles.text}>{text}</div>
      </TextButton>
    );
  }
}
