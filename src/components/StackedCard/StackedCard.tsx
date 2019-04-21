import * as React from 'react';
import style from './StackedCard.st.css';
import { Card, CardProps, CardRatioOptions } from '../Card';

export interface StackedCardProps extends CardProps {}

const StackedCard = (props: StackedCardProps) => {
  const { ratio, flippedRatio, invertInfoPosition } = props;
  return (
    <Card
      {...props}
      {...style('root', { ratio, flippedRatio, invertInfoPosition }, props)}
    />
  );
};

StackedCard.displayName = 'StackedCard';

export { StackedCard, CardRatioOptions as StackedCardRatioOptions };
