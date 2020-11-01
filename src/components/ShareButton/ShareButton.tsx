import * as React from 'react';
import { st, classes } from './ShareButton.st.css';
import { ButtonProps } from '../Button';
import { Omit } from '../../types';
import {
  TextButton,
  TextButtonProps,
  TEXT_BUTTON_PRIORITY,
} from '../TextButton';
import { ReactComponent as Share } from '../../assets/icons/Share.svg';

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
    const { shareData, text, withIcon, className, ...rest } = this.props;
    return (
      <TextButton
        className={st(
          classes.root,
          { withIcon, withText: Boolean(text) },
          className,
        )}
        priority={TEXT_BUTTON_PRIORITY.secondary}
        prefixIcon={withIcon ? <Share className={classes.icon} /> : undefined}
        {...rest}
        onClick={this.onButtonClick}
        data-hook={this.props['data-hook']}
      >
        <div className={classes.text}>{text}</div>
      </TextButton>
    );
  }
}
