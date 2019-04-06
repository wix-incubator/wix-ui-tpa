import * as React from 'react';
import style from './OverlappingCard.st.css';
import { Card, CardProps } from '../Card';

export const OverlappingCard = (props: CardProps) => {
  const { ratio, flippedRatio, invertInfoPosition } = props;
  return (
    <Card
      {...props}
      {...style('root', { ratio, flippedRatio, invertInfoPosition }, props)}
    />
  );
};
