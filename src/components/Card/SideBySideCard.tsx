import * as React from 'react';
import style from './SideBySideCard.st.css';
import { Card } from './Card';

export enum SideBySideCardRatioOptions {
  RATIO_50_50 = 'ratio-50',
  RATIO_40_60 = 'ratio-40',
  RATIO_30_70 = 'ratio-30',
}

export interface SideBySideCardRatioOptionsProps {
  media?: React.ReactNode;
  info?: React.ReactNode;
  ratio?: SideBySideCardRatioOptions;
  flippedRatio?: boolean;
  invertImagePosition?: boolean;
}

const SideBySideCard = ({
  ratio,
  flippedRatio,
  invertImagePosition,
  ...rest
}: SideBySideCardRatioOptionsProps) => {
  return (
    <Card
      {...rest}
      {...style('root', { ratio, flippedRatio, invertImagePosition })}
    />
  );
};

SideBySideCard.defaultProps = {
  ratio: SideBySideCardRatioOptions.RATIO_50_50,
  flippedRatio: false,
  invertImagePosition: false,
};

export { SideBySideCard };
