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
  stacked?: boolean;
  /** puts the media slot on top of the info slot. disables the `ratio` behavior */
  mediaAspectRatio?: number;
}

const getRatio = (mediaAspectRatio, stacked) => {
  if (mediaAspectRatio) {
    return mediaAspectRatio && `${Math.round(100 / mediaAspectRatio)}%`;
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
  mediaAspectRatio,
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
          mediaAspectRatio: !!mediaAspectRatio || stacked,
        },
        rest,
      )}
    >
      {media && ratio !== CardRatioOptions.RATIO_100 && (
        <div
          className={style.mediaWrapper}
          style={{ paddingTop: getRatio(mediaAspectRatio, stacked) }}
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
