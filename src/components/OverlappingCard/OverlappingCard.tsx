import * as React from 'react';
import { st, classes } from './OverlappingCard.st.css';
import { CardRatioOptions } from '../Card';
import { TPAComponentProps } from '../../types';
import { deprecationLog } from '../../common/deprecationLog';

export { CardRatioOptions as OverlappingCardRatioOptions };

export interface OverlappingCardProps extends TPAComponentProps {
  media?: React.ReactNode;
  info?: React.ReactNode;
  ratio?: CardRatioOptions;
  flippedRatio?: boolean;
  invertInfoPosition?: boolean;
}

const OverlappingCard = ({
  info,
  media,
  ratio,
  invertInfoPosition,
  flippedRatio,
  className,
  ['data-hook']: dataHook,
}: OverlappingCardProps) => {
  deprecationLog(
    'OverlappingCard',
    'The current `Card` component API will be deprecated in the next major version. Please use the `upgrade` prop in order to use the new API.\nYou can view the new API here: https://wix-wix-ui-tpa.surge.sh/?path=/story/components--newcard',
  );

  return (
    <div
      className={st(
        classes.root,
        {
          ratio: media ? ratio : CardRatioOptions.RATIO_100,
          invertInfoPosition,
          flippedRatio,
        },
        className,
      )}
      data-hook={dataHook}
    >
      {media && ratio !== CardRatioOptions.RATIO_100 && (
        <div className={classes.mediaContainer}>{media}</div>
      )}
      {info && <div className={classes.infoContainer}>{info}</div>}
    </div>
  );
};

OverlappingCard.displayName = 'OverlappingCard';
OverlappingCard.MIN_WIDTH = 700;

OverlappingCard.defaultProps = {
  ratio: CardRatioOptions.RATIO_50_50,
  flippedRatio: false,
  invertInfoPosition: false,
};

export { OverlappingCard };
