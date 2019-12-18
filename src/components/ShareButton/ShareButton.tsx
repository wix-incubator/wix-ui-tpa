import * as React from 'react';
import styles from './ShareButton.st.css';
import { TPAComponentProps } from '../../types';

interface RenderButtonProps {
  onClick: React.HTMLAttributes<HTMLButtonElement>['onClick'];
}
export interface ShareButtonProps extends TPAComponentProps {
  renderButton(props: RenderButtonProps): JSX.Element;
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

  onButtonClick: RenderButtonProps['onClick'] = () => {
    let sharePromise: Promise<void> | undefined;
    const { url, text, title } = this.props;
    const data = { url, text, title };

    if (navigator.share) {
      sharePromise = navigator.share(data);
    }
    this.props.onClick(sharePromise);
  };

  render() {
    const { renderButton, ...rest } = this.props;

    const button = renderButton({ onClick: this.onButtonClick });

    return <div {...styles('root', {}, rest)}>{button}</div>;
  }
}
