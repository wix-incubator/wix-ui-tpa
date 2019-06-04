import * as React from 'react';
import style from './OverlappingCard.st.css';
import { CardRatioOptions } from '../Card';

export { CardRatioOptions as OverlappingCardRatioOptions };

export interface OverlappingCardProps {
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
