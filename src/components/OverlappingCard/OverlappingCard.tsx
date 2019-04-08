import * as React from 'react';
import style from './OverlappingCard.st.css';
import { Card, CardProps } from '../Card';

export interface OverlappingCardProps extends CardProps {}

export const OverlappingCard = (props: OverlappingCardProps) => {
  const { ratio, flippedRatio, invertInfoPosition } = props;
  return (
    <Card
      {...props}
      {...style('root', { ratio, flippedRatio, invertInfoPosition }, props)}
    />
  );
};
