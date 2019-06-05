import * as React from 'react';
import styles from './StripCard.st.css';

export const MIN_WIDTH = 700;

export interface StripCardProps {
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
