import * as React from 'react';
import styles from './StripCard.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export interface StripCardProps {
  media?: React.ReactNode;
  info?: React.ReactNode;
  roundMedia?: boolean;
  withoutSidePadding?: boolean;
}

interface DefaultProps {
  roundMedia: boolean;
  withoutSidePadding: boolean;
}

export class StripCard extends React.Component<StripCardProps> {
  static displayName = 'StripCard';
  static defaultProps: DefaultProps = {
    roundMedia: false,
    withoutSidePadding: false,
  };

  render() {
    const { media, info, roundMedia, withoutSidePadding, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            {...styles(
              'root',
              { mobile, roundMedia, withoutSidePadding },
              rest,
            )}
          >
            {media && <div className={styles.mediaContainer}>{media}</div>}
            {info && <div className={styles.infoContainer}>{info}</div>}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
