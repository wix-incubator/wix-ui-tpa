import * as React from 'react';
import { Card } from '../Card';
import { OverlappingCard } from '../OverlappingCard';
import { StripCard } from '../StripCard';
import {
  DEFAULT_MIN_WIDTH,
  CARD_MIN_WIDTH,
  OVERLAPPING_CARD_MIN_WIDTH,
  STACKED_CARD_MIN_WIDTH,
  STRIP_CARD_MIN_WIDTH,
} from './constants';

export function itemsPerRowWidth(
  rowWidth,
  itemWidth,
  maxItemsPerRow,
  columnGap,
) {
  if (rowWidth !== 0) {
    while (
      rowWidth <
      maxItemsPerRow * itemWidth + columnGap * (maxItemsPerRow - 1)
    ) {
      maxItemsPerRow--;
    }
  }

  return maxItemsPerRow || 1;
}

export function getMediaQueries({
  maxItemsPerRow,
  minItemWidth,
  maxItemWidth = 0,
  columnGap,
  ListItemClass,
  cardListId,
}) {
  let mediaQueries = '';
  while (maxItemsPerRow > 0) {
    const minWidth =
      maxItemsPerRow * minItemWidth + columnGap * (maxItemsPerRow - 1);
    mediaQueries = `@media (min-width: ${minWidth}px) {#${cardListId} .${ListItemClass} {grid-template-columns: repeat(${maxItemsPerRow}, minmax(${minItemWidth}px, ${
      maxItemWidth ? `${maxItemWidth}px` : '100vw'
    }));}}${mediaQueries}`;
    maxItemsPerRow--;
  }
  return <style type="text/css">{mediaQueries}</style>;
}

export function getMinWidthByCardType(CardComponent): number {
  switch (CardComponent && CardComponent.type.displayName) {
    case Card.displayName:
      return CardComponent.props.stacked
        ? STACKED_CARD_MIN_WIDTH
        : CARD_MIN_WIDTH;
    case OverlappingCard.displayName:
      return OVERLAPPING_CARD_MIN_WIDTH;
    case StripCard.displayName:
      return STRIP_CARD_MIN_WIDTH;
    default:
      return DEFAULT_MIN_WIDTH;
  }
}

export function generateListClassId(): string {
  return 'list_' + Math.random().toString(36).substr(2, 9)
}
