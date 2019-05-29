import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { gridDriverFactory } from './Grid.driver';
import { Grid } from './';
import { gridTestkitFactory } from '../../testkit';
import { gridTestkitFactory as enzymeGridTestkitFactory } from '../../testkit/enzyme';
import {
  COLUMN_GAP,
  COLUMS_SPAN,
  IGridItem,
  MOBILE_COLUMN_GAP,
  MOBILE_ROW_GAP,
  ROW_GAP,
  ROW_SPAN,
} from './Grid';
import { Card } from '../Card';
import styles from './Grid.st.css';
import * as GridUtils from './GridUtils';
import { TPAComponentsWrapper } from '../../test/utils';

function generateItems(amount = 5, withKey = false): IGridItem[] {
  return Array(amount)
    .fill(null)
    .map((item, index) => {
      return {
        item: <Card stacked info={<div>info</div>} />,
        key: withKey ? `key-${index}` : undefined,
      };
    });
}

describe('Grid', () => {
  const createDriver = createUniDriverFactory(gridDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Grid />);
    expect(await driver.exists()).toBe(true);
  });

  it('should calculate max items per row', () => {
    spyOn(GridUtils, 'itemsPerRowWidth');
    const expectedListWidth = 520;
    const expectedMaxItemsPerRow = 5;
    const expectedMinItemWidth = 120;
    const expectedColumnGap = 10;

    createDriver(
      <Grid
        width={expectedListWidth}
        maxColumns={expectedMaxItemsPerRow}
        minColumnWidth={expectedMinItemWidth}
        columnGap={expectedColumnGap}
        items={generateItems()}
      />,
    );

    expect(GridUtils.itemsPerRowWidth).toHaveBeenCalledWith(
      expectedListWidth,
      expectedMinItemWidth,
      expectedMaxItemsPerRow,
      expectedColumnGap,
    );
  });

  it('should accept dividerWidth as number', async () => {
    const dividerWidth = 3;
    const expectedDividerWidth = `${dividerWidth}px`;
    const driver = createDriver(
      <Grid
        dividerWidth={dividerWidth}
        width={1}
        withDivider
        items={generateItems()}
      />,
    );

    expect(await driver.isDividerWidth(expectedDividerWidth)).toEqual(true);
  });

  it('should accept dividerWidth as string', async () => {
    const expectedDividerWidth = '7px';
    const driver = createDriver(
      <Grid
        dividerWidth={expectedDividerWidth}
        width={1}
        withDivider
        items={generateItems()}
      />,
    );

    expect(await driver.isDividerWidth(expectedDividerWidth)).toEqual(true);
  });

  it('should limit items per row depending on the width of the List', async () => {
    const expectedItemsPerRow = 4;
    spyOn(GridUtils, 'itemsPerRowWidth').and.returnValue(expectedItemsPerRow);

    const driver = createDriver(<Grid width={1} />);

    expect(await driver.isItemsPerRow(expectedItemsPerRow)).toBe(true);
  });

  it('should use amount of items as maxColumns if lower then maxColumns', async () => {
    const expectedItemsPerRow = 4;

    const driver = createDriver(
      <Grid
        items={generateItems(expectedItemsPerRow)}
        maxColumns={expectedItemsPerRow + 1}
        width={1000}
      />,
    );

    expect(await driver.isItemsPerRow(expectedItemsPerRow)).toBe(true);
  });

  it('should use 1 default amount of items ', async () => {
    const driver = createDriver(<Grid items={generateItems()} width={1} />);

    expect(await driver.isItemsPerRow(1)).toBe(true);
  });

  it('should use default max item width', async () => {
    const expectedItemMaxWidth = '100vw';

    const driver = createDriver(<Grid width={1} />);

    expect(await driver.isItemMaxWidth(expectedItemMaxWidth)).toEqual(true);
  });

  it('should use item key', async () => {
    const items = generateItems(2, true);

    const driver = mount(<Grid width={1} items={items} />);
    const cardWrappers = driver.find('li');

    expect(cardWrappers.at(0).key()).toEqual(items[0].key);
    expect(cardWrappers.at(1).key()).toEqual(items[1].key);
  });

  it('should use default key', async () => {
    const items = generateItems(2);

    const driver = mount(<Grid width={1} items={items} />);
    const cardWrappers = driver.find('li');

    expect(cardWrappers.at(0).key()).toEqual('card-container-0');
    expect(cardWrappers.at(1).key()).toEqual('card-container-1');
  });

  it('should use default item span', async () => {
    const driver = createDriver(<Grid width={1} items={generateItems()} />);

    expect(await driver.rowSpan()).toEqual(ROW_SPAN);
    expect(await driver.columnSpan()).toEqual(COLUMS_SPAN);
  });

  it('should use given item span', async () => {
    const expectedRowSpan = 8;
    const expectedColSpan = 3;
    const items = generateItems(1);
    items[0].colSpan = expectedColSpan;
    items[0].rowSpan = expectedRowSpan;
    const driver = createDriver(<Grid width={1} items={items} />);

    expect(await driver.rowSpan()).toEqual(expectedRowSpan);
    expect(await driver.columnSpan()).toEqual(expectedColSpan);
  });

  it('should use media query if list width is 0', async () => {
    const expectedMaxItemsPerRow = 3;
    const expectedMinItemWidth = 300;
    const expectedColumnGap = 48;
    const expectedGridId = 'someID';
    spyOn(GridUtils, 'getMediaQueries');
    spyOn(GridUtils, 'generateListClassId').and.returnValue(expectedGridId);

    createDriver(
      <Grid
        maxColumns={expectedMaxItemsPerRow}
        minColumnWidth={expectedMinItemWidth}
        columnGap={expectedColumnGap}
        items={generateItems(expectedMaxItemsPerRow + 1)}
      />,
    );

    expect(GridUtils.getMediaQueries).toHaveBeenCalledWith({
      maxColumns: expectedMaxItemsPerRow,
      minColumnWidth: expectedMinItemWidth,
      columnGap: expectedColumnGap,
      ListItemClass: styles.listWrapper,
      gridId: expectedGridId,
    });
  });

  it('should set default gap 32px', async () => {
    const driver = createDriver(<Grid items={generateItems()} />);

    expect(await driver.rowGap()).toEqual(`${ROW_GAP}px`);
    expect(await driver.columnGap()).toEqual(`${COLUMN_GAP}px`);
  });

  it('should add divider width to row gap', async () => {
    const withDivider = true;
    const expectedDividerWidth = 10;
    const expectedRowGap = 20;

    const driver = createDriver(
      <Grid
        items={generateItems()}
        withDivider={withDivider}
        rowGap={expectedRowGap}
        dividerWidth={expectedDividerWidth}
      />,
    );

    expect(await driver.rowGap(withDivider)).toEqual(
      `calc(${expectedRowGap}px + ${expectedDividerWidth}px)`,
    );
  });

  it('should set default gap 20px (mobile)', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<Grid items={generateItems()} />),
    );

    expect(await driver.rowGap()).toEqual(`${MOBILE_ROW_GAP}px`);
    expect(await driver.columnGap()).toEqual(`${MOBILE_COLUMN_GAP}px`);
  });

  it('should use amount of items as maxColumns if lower then maxColumns on responsive', async () => {
    const expectedMaxItemsPerRow = 3;
    const expectedMinItemWidth = 300;
    const expectedColumnGap = 48;
    const expectedGridId = 'someID';
    spyOn(GridUtils, 'getMediaQueries');
    spyOn(GridUtils, 'generateListClassId').and.returnValue(expectedGridId);

    createDriver(
      <Grid
        maxColumns={expectedMaxItemsPerRow + 1}
        minColumnWidth={expectedMinItemWidth}
        columnGap={expectedColumnGap}
        items={generateItems(expectedMaxItemsPerRow)}
      />,
    );

    expect(GridUtils.getMediaQueries).toHaveBeenCalledWith({
      maxColumns: expectedMaxItemsPerRow,
      minColumnWidth: expectedMinItemWidth,
      columnGap: expectedColumnGap,
      ListItemClass: styles.listWrapper,
      gridId: expectedGridId,
    });
  });

  it('should use CardComponent Type to determine min width if none was provided', () => {
    spyOn(GridUtils, 'getMinWidthByCardType');
    const expectedCardComponent = <div />;

    createDriver(<Grid width={1} items={[{ item: expectedCardComponent }]} />);

    expect(GridUtils.getMinWidthByCardType).toHaveBeenCalledWith(
      expectedCardComponent,
    );
  });

  it('should display divider', async () => {
    const driver = createDriver(<Grid withDivider items={generateItems()} />);

    expect(await driver.isWithDivider()).toEqual(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Grid />, gridTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Grid />,
          enzymeGridTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
