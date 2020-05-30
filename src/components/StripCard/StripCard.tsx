import * as React from 'react';
import { st, classes } from './StripCard.st.css';
import { TPAComponentProps } from '../../types';
import { deprecationLog, wrap, unwrap } from '../../common/deprecationLog';

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
  constructor(props) {
    super(props);
    wrap('Card');
  }

  componentDidMount(): void {
    deprecationLog(
      'StripCard',
      'The current `Card` component API will be deprecated in the next major version. Please use the `upgrade` prop in order to use the new API.\nYou can view the new API here: https://wix-wix-ui-tpa.surge.sh/?path=/story/components--newcard',
    );
    unwrap('Card');
  }

  render() {
    const { media, info, roundMedia, sidePadding, className } = this.props;

    return (
      <div
        className={st(classes.root, { roundMedia, sidePadding }, className)}
        data-hook={this.props['data-hook']}
      >
        {media ? <div className={classes.mediaContainer}>{media}</div> : null}
        {info ? <div className={classes.infoContainer}>{info}</div> : null}
      </div>
    );
  }
}
