import * as React from 'react';
import {
  itemsPerRowWidth,
  getMediaQueries,
  getMinWidthByCardType,
} from './ListCardUtils';
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

describe('ListCardUtils', () => {
  describe('itemsPerRowWidth', () => {
    it('should return the smallest itemsPerRow limited by the ListWidth', () => {
      expect(itemsPerRowWidth(510, 120, 5, 10)).toEqual(4);
    });

    it('should return itemsPerRow as is when ListWidth is 0', () => {
      const expectedItemsPerRow = 5;
      expect(itemsPerRowWidth(0, 120, expectedItemsPerRow, 10)).toEqual(
        expectedItemsPerRow,
      );
    });

    it('should return 1 if ListWidth is smaller then the itemWidth', () => {
      const expectedItemsPerRow = 1;
      expect(itemsPerRowWidth(1, 120, expectedItemsPerRow, 10)).toEqual(
        expectedItemsPerRow,
      );
    });
  });

  describe('getMediaQueries', () => {
    it('should generate media queries for given attributes', () => {
      const expectedMaxItemsPerRow = 3;
      const expectedMinItemWidth = 300;
      const expectedMaxItemWidth = 400;
      const columnGap = 48;
      const expectedMinWidths = [
        expectedMaxItemsPerRow * expectedMinItemWidth +
          columnGap * (expectedMaxItemsPerRow - 1),
        (expectedMaxItemsPerRow - 1) * expectedMinItemWidth +
          columnGap * (expectedMaxItemsPerRow - 2),
        (expectedMaxItemsPerRow - 2) * expectedMinItemWidth +
          columnGap * (expectedMaxItemsPerRow - 3),
      ];
      const expectedClassName = 'someClassName';
      const expectedListCardId = 'someID';
      const expectedStyle = (
        <style type="text/css">
          {`@media (min-width: ${
            expectedMinWidths[2]
          }px) {#${expectedListCardId} .${expectedClassName} {grid-template-columns: repeat(${expectedMaxItemsPerRow -
            2}, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}px));}}` +
            `@media (min-width: ${
              expectedMinWidths[1]
            }px) {#${expectedListCardId} .${expectedClassName} {grid-template-columns: repeat(${expectedMaxItemsPerRow -
              1}, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}px));}}` +
            `@media (min-width: ${
              expectedMinWidths[0]
            }px) {#${expectedListCardId} .${expectedClassName} {grid-template-columns: repeat(${expectedMaxItemsPerRow}, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}px));}}`}
        </style>
      );

      expect(
        getMediaQueries({
          maxItemsPerRow: expectedMaxItemsPerRow,
          minItemWidth: expectedMinItemWidth,
          maxItemWidth: expectedMaxItemWidth,
          columnGap,
          ListItemClass: expectedClassName,
          listCardId: expectedListCardId
        }),
      ).toEqual(expectedStyle);
    });

    it('should set max to 1fr if MaxItemWidth was not given', () => {
      const expectedMaxItemsPerRow = 1;
      const expectedMinItemWidth = 300;
      const expectedClassName = 'someClassName';
      const expectedListCardId = 'someID';
      const expectedStyle = (
        <style type="text/css">{`@media (min-width: 300px) {#${expectedListCardId} .${expectedClassName} {grid-template-columns: repeat(${expectedMaxItemsPerRow}, minmax(${expectedMinItemWidth}px, 100vw));}}`}</style>
      );

      expect(
        getMediaQueries({
          maxItemsPerRow: expectedMaxItemsPerRow,
          minItemWidth: expectedMinItemWidth,
          columnGap: 48,
          ListItemClass: expectedClassName,
          listCardId: expectedListCardId,
        }),
      ).toEqual(expectedStyle);
    });
  });

  describe('getMinWidthByCardType', () => {
    it('should return Card min width', () => {
      expect(getMinWidthByCardType(<Card />)).toEqual(CARD_MIN_WIDTH);
    });

    it('should return stacked Card min width', () => {
      expect(getMinWidthByCardType(<Card stacked />)).toEqual(
        STACKED_CARD_MIN_WIDTH,
      );
    });

    it('should return Overlapping min width', () => {
      expect(getMinWidthByCardType(<OverlappingCard />)).toEqual(
        OVERLAPPING_CARD_MIN_WIDTH,
      );
    });

    it('should return StripCard min width', () => {
      expect(getMinWidthByCardType(<StripCard />)).toEqual(
        STRIP_CARD_MIN_WIDTH,
      );
    });

    it('should default 0', () => {
      expect(getMinWidthByCardType(<div />)).toEqual(DEFAULT_MIN_WIDTH);
    });
  });
});
