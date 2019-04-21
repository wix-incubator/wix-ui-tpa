import * as React from 'react';
import style from './Card.st.css';

export enum CardRatioOptions {
  RATIO_100 = '100',
  RATIO_50_50 = '50',
  RATIO_40_60 = '40',
  RATIO_30_70 = '30',
}

export interface CardProps {
  media?: React.ReactNode;
  info?: React.ReactNode;
  ratio?: CardRatioOptions;
  flippedRatio?: boolean;
  invertInfoPosition?: boolean;
}

const Card = ({
  info,
  media,
  ratio,
  invertInfoPosition,
  flippedRatio,
  ...rest
}: CardProps) => {
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
      {media && <div className={style.mediaContainer}>{media}</div>}
      {info && <div className={style.infoContainer}>{info}</div>}
    </div>
  );
};

Card.displayName = 'Card';

Card.defaultProps = {
  ratio: CardRatioOptions.RATIO_50_50,
  flippedRatio: false,
  invertInfoPosition: false,
};

export { Card };
