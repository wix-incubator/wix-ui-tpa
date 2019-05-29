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

export function itemsPerRowWidth(rowWidth, itemWidth, maxColumns, columnGap) {
  if (rowWidth !== 0) {
    while (rowWidth < maxColumns * itemWidth + columnGap * (maxColumns - 1)) {
      maxColumns--;
    }
  }

  return maxColumns || 1;
}

export function getMediaQueries({
  maxColumns,
  minColumnWidth,
  columnGap,
  ListItemClass,
  gridId,
}) {
  let mediaQueries = '';
  while (maxColumns > 0) {
    const minWidth = maxColumns * minColumnWidth + columnGap * (maxColumns - 1);
    mediaQueries = `@media (min-width: ${minWidth}px) {#${gridId} .${ListItemClass} {-ms-grid-columns: repeat(${maxColumns}, minmax(${minColumnWidth}px, 100vw));grid-template-columns: repeat(${maxColumns}, minmax(${minColumnWidth}px, 100vw));}}${mediaQueries}`;
    maxColumns--;
  }
  return <style dangerouslySetInnerHTML={{ __html: mediaQueries }} />;
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
  return (
    'list_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
