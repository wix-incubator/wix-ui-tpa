import * as React from 'react';
import style from './Card.st.css';

export enum CardRatioOptions {
  RATIO_100 = '100',
  RATIO_50_50 = '50',
  RATIO_40_60 = '40',
  RATIO_30_70 = '30',
  SAME_AS_CONTENT = 'SAME_AS_CONTENT',
}

export interface CardProps {
  media?: React.ReactNode;
  info?: React.ReactNode;
  ratio?: CardRatioOptions;
  flippedRatio?: boolean;
  invertInfoPosition?: boolean;
  stacked?: boolean;
  imageAspectRatio?: number;
}

const getRatio = (imageAspectRatio, stacked) => {
  if (imageAspectRatio) {
    return imageAspectRatio && `${Math.round(100 / imageAspectRatio)}%`;
  }

  return `${stacked ? 100 : 0}%`;
};

const Card = ({
  info,
  media,
  ratio,
  invertInfoPosition,
  flippedRatio,
  stacked,
  imageAspectRatio,
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
          stacked,
          imageAspectRatio: !!imageAspectRatio,
        },
        rest,
      )}
    >
      {media && ratio !== CardRatioOptions.RATIO_100 && (
        <div
          className={style.mediaWrapper}
          style={{ paddingTop: getRatio(imageAspectRatio, stacked) }}
        >
          <div className={style.mediaContainer}>{media}</div>
        </div>
      )}
      {info && <div className={style.infoContainer}>{info}</div>}
    </div>
  );
};

Card.displayName = 'Card';

Card.defaultProps = {
  ratio: CardRatioOptions.RATIO_50_50,
  flippedRatio: false,
  invertInfoPosition: false,
  stacked: false,
};

export { Card };
