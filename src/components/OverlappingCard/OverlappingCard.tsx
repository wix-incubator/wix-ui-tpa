import * as React from 'react';
import style from './OverlappingCard.st.css';
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
  ...rest
}: OverlappingCardProps) => {
  deprecationLog(
    'OverlappingCard',
    'The current `Card` component API will be deprecated in the next major version. Please use the `upgrade` prop in order to use the new API.\nYou can view the new API here: https://wix-wix-ui-tpa.surge.sh/?path=/story/components--newcard',
  );

  return (
    <div
      {...style(
        'root',
        {
          ratio: media ? ratio : CardRatioOptions.RATIO_100,
          invertInfoPosition,
          flippedRatio,
        },
        rest,
      )}
    >
      {media && ratio !== CardRatioOptions.RATIO_100 && (
        <div className={style.mediaContainer}>{media}</div>
      )}
      {info && <div className={style.infoContainer}>{info}</div>}
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
