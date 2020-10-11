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
  MOBILE_COLUMN_GAP,
  MOBILE_ROW_GAP,
  ROW_GAP,
} from './constants';
import { Card } from '../Card';
import { classes, cssStates } from './Grid.st.css';
import * as GridUtils from './GridUtils';
import * as RandomUtils from '../../common/random';
import { TPAComponentsWrapper } from '../../test/utils';

function generateItems(amount = 5) {
  return Array(amount)
    .fill(null)
    .map((item, index) => {
      return (
        <Grid.Item key={`key-${index}`}>
          <Card stacked info={<div>info</div>} />
        </Grid.Item>
      );
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
      >
        {generateItems(expectedMaxItemsPerRow)}
      </Grid>,
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
      <Grid dividerWidth={dividerWidth} width={1} showRowDivider>
        {generateItems()}
      </Grid>,
    );

    expect(await driver.dividerWidth()).toEqual(expectedDividerWidth);
  });

  it('should accept dividerWidth as string', async () => {
    const expectedDividerWidth = '7px';
    const driver = createDriver(
      <Grid dividerWidth={expectedDividerWidth} width={1} showRowDivider>
        {generateItems()}
      </Grid>,
    );

    expect(await driver.dividerWidth()).toEqual(expectedDividerWidth);
  });

  it('should limit items per row depending on the width of the List', async () => {
    const expectedItemsPerRow = 4;
    spyOn(GridUtils, 'itemsPerRowWidth').and.returnValue(expectedItemsPerRow);

    const driver = createDriver(<Grid width={1} />);

    expect(await driver.itemsPerRow()).toBe(expectedItemsPerRow);
  });

  it('should use 1 default amount of items ', async () => {
    const driver = createDriver(<Grid width={1}>{generateItems()}</Grid>);

    expect(await driver.itemsPerRow()).toBe(1);
  });

  it('should use default max item width', async () => {
    const expectedItemMaxWidth = '100vw';

    const driver = createDriver(<Grid width={1} />);

    expect(await driver.maxColumnWidth()).toEqual(expectedItemMaxWidth);
  });

  it('should use item key', async () => {
    const items = generateItems(2);

    const driver = mount(<Grid width={1}>{items}</Grid>);
    const cardWrappers = driver.find(Grid.Item);

    expect(cardWrappers.at(0).key()).toEqual(items[0].key);
    expect(cardWrappers.at(1).key()).toEqual(items[1].key);
  });

  it('should use media query if list width is 0', async () => {
    const expectedMaxItemsPerRow = 3;
    const expectedMinItemWidth = 300;
    const expectedMaxItemWidth = 400;
    const expectedColumnGap = 48;
    const expectedGridId = 'someID';
    spyOn(GridUtils, 'getMediaQueries');
    spyOn(RandomUtils, 'generateKey').and.returnValue(expectedGridId);

    createDriver(
      <Grid
        maxColumns={expectedMaxItemsPerRow}
        minColumnWidth={expectedMinItemWidth}
        maxColumnWidth={expectedMaxItemWidth}
        columnGap={expectedColumnGap}
      >
        {generateItems(expectedMaxItemsPerRow + 1)}
      </Grid>,
    );

    expect(GridUtils.getMediaQueries).toHaveBeenCalledWith({
      maxColumns: expectedMaxItemsPerRow,
      minColumnWidth: expectedMinItemWidth,
      maxColumnWidth: `${expectedMaxItemWidth}px`,
      columnGap: expectedColumnGap,
      ListItemClass: classes.listWrapper,
      gridId: expectedGridId,
    });
  });

  it('should set default gap 32px', async () => {
    const driver = createDriver(<Grid />);

    expect(await driver.rowGap()).toEqual(`${ROW_GAP}px`);
    expect(await driver.columnGap()).toEqual(`${COLUMN_GAP}px`);
  });

  it('should allow gap 0', async () => {
    const expectedRowGap = 0;
    const expectedColumnGap = 0;

    const driver = createDriver(
      <Grid rowGap={expectedRowGap} columnGap={expectedColumnGap} />,
    );

    expect(await driver.rowGap()).toEqual(`${expectedRowGap}px`);
    expect(await driver.columnGap()).toEqual(`${expectedColumnGap}px`);
  });

  it('should add divider width to row gap', async () => {
    const showRowDivider = true;
    const expectedDividerWidth = 10;
    const expectedRowGap = 20;

    const driver = createDriver(
      <Grid
        showRowDivider={showRowDivider}
        rowGap={expectedRowGap}
        dividerWidth={expectedDividerWidth}
      />,
    );

    expect(await driver.rowGap()).toEqual(
      `calc(${expectedRowGap}px + ${expectedDividerWidth}px)`,
    );
  });

  it('should set default gap (mobile)', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<Grid />),
    );

    expect(await driver.rowGap()).toEqual(`${MOBILE_ROW_GAP}px`);
    expect(await driver.columnGap()).toEqual(`${MOBILE_COLUMN_GAP}px`);
  });

  it('should call getGridStyle', () => {
    const expectedMaxItemsPerRow = 3;
    const expectedMinItemWidth = 300;
    const expectedColumnGap = 48;
    const expectedRowGap = 47;
    const expectedDividerWidth = '34px';
    const expectedGridId = 'someID';
    const expectedCSSStateDivider = Object.keys(
      cssStates({ dividers: true }),
    )[0];
    spyOn(GridUtils, 'getGridStyle');
    spyOn(RandomUtils, 'generateKey').and.returnValue(expectedGridId);

    createDriver(
      <Grid
        rowGap={expectedRowGap}
        dividerWidth={expectedDividerWidth}
        maxColumns={expectedMaxItemsPerRow + 1}
        minColumnWidth={expectedMinItemWidth}
        columnGap={expectedColumnGap}
      />,
    );

    expect(GridUtils.getGridStyle).toHaveBeenCalledWith({
      rowGap: expectedRowGap,
      dividerWidth: expectedDividerWidth,
      cssStateDivider: expectedCSSStateDivider,
      gridId: expectedGridId,
      gridTemplateColumns: '',
      listWrapperClass: classes.listWrapper,
    });
  });

  it('should call getGridStyle with correct gridTemplateColumns when not responsive', () => {
    const expectedGridTemplateRow = 'repeat(1, minmax(0px, 100vw))';
    spyOn(GridUtils, 'getGridStyle');

    createDriver(<Grid width={700} />);

    expect(GridUtils.getGridStyle).toHaveBeenCalledWith(
      expect.objectContaining({
        gridTemplateColumns: expectedGridTemplateRow,
        rowGap: expect.any(Number),
        dividerWidth: expect.any(String),
        cssStateDivider: expect.any(String),
        gridId: expect.any(String),
        listWrapperClass: expect.any(String),
      }),
    );
  });

  it('should use max item width', async () => {
    const expectedItemMaxWidth = 300;

    const driver = createDriver(<Grid maxColumnWidth={expectedItemMaxWidth} />);

    expect(await driver.maxColumnWidth()).toEqual(`${expectedItemMaxWidth}px`);
  });

  it('should use max item width', async () => {
    const expectedItemMinWidth = 300;

    const driver = createDriver(<Grid minColumnWidth={expectedItemMinWidth} />);

    expect(await driver.minColumnWidth()).toEqual(`${expectedItemMinWidth}px`);
  });

  it('should display divider', async () => {
    const driver = createDriver(<Grid showRowDivider />);

    expect(await driver.isShowRowDivider()).toEqual(true);
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
