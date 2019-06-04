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

export function getMediaQueries({
  maxColumns,
  minColumnWidth,
  maxColumnWidth,
  columnGap,
  ListItemClass,
  gridId,
}) {
  let mediaQueries = '';
  while (maxColumns > 0) {
    const minWidth = maxColumns * minColumnWidth + columnGap * (maxColumns - 1);
    mediaQueries = `
@media (min-width: ${minWidth}px) {
  #${gridId} .${ListItemClass} {
    -ms-grid-columns: repeat(${maxColumns}, minmax(${minColumnWidth}px, ${maxColumnWidth}));
    grid-template-columns: repeat(${maxColumns}, minmax(${minColumnWidth}px, ${maxColumnWidth}));
  }
}
${mediaQueries}`;
    maxColumns--;
  }
  return mediaQueries;
}

export function getGridStyle({
  gridId,
  gridTemplateColumns,
  cssStateDivider,
  rowGap,
  dividerWidth,
  listWrapperClass,
}) {
  return `  
#${gridId} .${listWrapperClass} {
  -ms-grid-columns: ${gridTemplateColumns};
}

#${gridId}[${cssStateDivider}] {
  padding: calc((${rowGap}px / 2) + ${dividerWidth}) 0;
}

#${gridId}[${cssStateDivider}] li::before {
  top: calc((${rowGap}px / -2) - ${dividerWidth});
}

#${gridId}[${cssStateDivider}] li::after {
bottom: calc((${rowGap}px / -2) - ${dividerWidth});
}

#${gridId}[${cssStateDivider}] li::before,
#${gridId}[${cssStateDivider}] li::after,
#${gridId}[${cssStateDivider}] .${listWrapperClass}::before,
#${gridId}[${cssStateDivider}] .${listWrapperClass}::after {
  height: ${dividerWidth};
}

#${gridId}[${cssStateDivider}] li::after,
#${gridId}[${cssStateDivider}] li::before {
  left: -${rowGap}px;
}`;
}

export function generateListClassId(): string {
  return (
    'list_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
