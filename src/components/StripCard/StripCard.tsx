import * as React from 'react';
import styles from './StripCard.st.css';
import { TPAComponentProps } from '../../types';
import { deprecationLog } from '../../common/deprecationLog';

export const MIN_WIDTH = 700;

export interface StripCardProps extends TPAComponentProps {
  media?: React.ReactNode;
  info?: React.ReactNode;
  roundMedia?: boolean;
  sidePadding?: boolean;
}

interface DefaultProps {
  roundMedia: boolean;
  sidePadding: boolean;
}

export class StripCard extends React.Component<StripCardProps> {
  static displayName = 'StripCard';
  static MIN_WIDTH = 700;
  static defaultProps: DefaultProps = {
    roundMedia: false,
    sidePadding: true,
  };

  componentDidMount(): void {
    deprecationLog(
      'The current `Card` component API will be deprecated in the next major version. Please use the `upgrade` prop in order to use the new API.\nYou can view the new API here: https://wix-wix-ui-tpa.surge.sh/?path=/story/components--newcard',
    );
  }

  render() {
    const { media, info, roundMedia, sidePadding, ...rest } = this.props;

    return (
      <div {...styles('root', { roundMedia, sidePadding }, rest)}>
        {media ? <div className={styles.mediaContainer}>{media}</div> : null}
        {info ? <div className={styles.infoContainer}>{info}</div> : null}
      </div>
    );
  }
}
