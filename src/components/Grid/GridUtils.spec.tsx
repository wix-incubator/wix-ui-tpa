import * as React from 'react';
import { itemsPerRowWidth, getMediaQueries, getGridStyle } from './GridUtils';

describe('GridUtils', () => {
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
      const expectedMaxItemWidth = '400px';
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
      const expectedGridId = 'someID';
      const expectedStyle = `
@media (min-width: ${expectedMinWidths[2]}px) {
  #${expectedGridId} .${expectedClassName} {
    -ms-grid-columns: repeat(${
      expectedMaxItemsPerRow - 2
    }, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}));
    grid-template-columns: repeat(${
      expectedMaxItemsPerRow - 2
    }, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}));
  }
}

@media (min-width: ${expectedMinWidths[1]}px) {
  #${expectedGridId} .${expectedClassName} {
    -ms-grid-columns: repeat(${
      expectedMaxItemsPerRow - 1
    }, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}));
    grid-template-columns: repeat(${
      expectedMaxItemsPerRow - 1
    }, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}));
  }
}

@media (min-width: ${expectedMinWidths[0]}px) {
  #${expectedGridId} .${expectedClassName} {
    -ms-grid-columns: repeat(${expectedMaxItemsPerRow}, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}));
    grid-template-columns: repeat(${expectedMaxItemsPerRow}, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}));
  }
}
`;

      expect(
        getMediaQueries({
          maxColumns: expectedMaxItemsPerRow,
          minColumnWidth: expectedMinItemWidth,
          maxColumnWidth: expectedMaxItemWidth,
          columnGap,
          ListItemClass: expectedClassName,
          gridId: expectedGridId,
        }),
      ).toEqual(expectedStyle);
    });

    it('should set max to 1fr if MaxItemWidth was not given', () => {
      const expectedMaxItemsPerRow = 1;
      const expectedMinItemWidth = 300;
      const expectedMaxItemWidth = '400px';
      const expectedClassName = 'someClassName';
      const expectedGridId = 'someID';
      const expectedStyle = `
@media (min-width: 300px) {
  #${expectedGridId} .${expectedClassName} {
    -ms-grid-columns: repeat(${expectedMaxItemsPerRow}, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}));
    grid-template-columns: repeat(${expectedMaxItemsPerRow}, minmax(${expectedMinItemWidth}px, ${expectedMaxItemWidth}));
  }
}
`;

      expect(
        getMediaQueries({
          maxColumns: expectedMaxItemsPerRow,
          minColumnWidth: expectedMinItemWidth,
          maxColumnWidth: expectedMaxItemWidth,
          columnGap: 48,
          ListItemClass: expectedClassName,
          gridId: expectedGridId,
        }),
      ).toEqual(expectedStyle);
    });
  });

  describe('', () => {
    it('should return style tag for Grid component', () => {
      const expectedGridId = 'some-id';
      const expectedStateDivider = 'some-state=divider';
      const expectedDividerWidth = '4px';
      const expectedRowGap = 24;
      const expectedTemplateColumns = 'someTemplateColumns';
      const expectedListWrapperClass = 'someTemplateColumns';
      const expectedStyle = `  
#${expectedGridId} .${expectedListWrapperClass} {
  -ms-grid-columns: ${expectedTemplateColumns};
}

#${expectedGridId}[${expectedStateDivider}] {
  padding: calc((${expectedRowGap}px / 2) + ${expectedDividerWidth}) 0;
}

#${expectedGridId}[${expectedStateDivider}] li::before {
  top: calc((${expectedRowGap}px / -2) - ${expectedDividerWidth});
}

#${expectedGridId}[${expectedStateDivider}] li::after {
bottom: calc((${expectedRowGap}px / -2) - ${expectedDividerWidth});
}

#${expectedGridId}[${expectedStateDivider}] li::before,
#${expectedGridId}[${expectedStateDivider}] li::after,
#${expectedGridId}[${expectedStateDivider}] .${expectedListWrapperClass}::before,
#${expectedGridId}[${expectedStateDivider}] .${expectedListWrapperClass}::after {
  height: ${expectedDividerWidth};
}

#${expectedGridId}[${expectedStateDivider}] li::after,
#${expectedGridId}[${expectedStateDivider}] li::before {
  left: -${expectedRowGap}px;
}`;

      expect(
        getGridStyle({
          gridId: expectedGridId,
          cssStateDivider: expectedStateDivider,
          dividerWidth: expectedDividerWidth,
          rowGap: expectedRowGap,
          gridTemplateColumns: expectedTemplateColumns,
          listWrapperClass: expectedListWrapperClass,
        }),
      ).toEqual(expectedStyle);
    });
  });
});
