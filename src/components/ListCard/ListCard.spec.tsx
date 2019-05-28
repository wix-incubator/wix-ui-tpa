import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { listCardDriverFactory } from './ListCard.driver';
import { ListCard } from './';
import { listCardTestkitFactory } from '../../testkit';
import { listCardTestkitFactory as enzymeListCardTestkitFactory } from '../../testkit/enzyme';
import { IListCardItem } from './ListCard';
import { Card } from '../Card';
import styles from './ListCard.st.css';
import * as ListCardUtils from './ListCardUtils';

function generateItems(amount = 5, withKey = false): IListCardItem[] {
  return Array(amount)
    .fill(null)
    .map((item, index) => {
      return {
        item: <Card stacked info={<div>info</div>} />,
        key: withKey ? `key-${index}` : undefined,
      };
    });
}

describe('ListCard', () => {
  const createDriver = createUniDriverFactory(listCardDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<ListCard />);
    expect(await driver.exists()).toBe(true);
  });

  it('should calculate max items per row', () => {
    spyOn(ListCardUtils, 'itemsPerRowWidth');
    const expectedListWidth = 520;
    const expectedMaxItemsPerRow = 5;
    const expectedMinItemWidth = 120;
    const expectedColumnGap = 10;

    createDriver(
      <ListCard
        listWidth={expectedListWidth}
        maxItemsPerRow={expectedMaxItemsPerRow}
        minItemWidth={expectedMinItemWidth}
        columnGap={expectedColumnGap}
        items={generateItems()}
      />,
    );

    expect(ListCardUtils.itemsPerRowWidth).toHaveBeenCalledWith(
      expectedListWidth,
      expectedMinItemWidth,
      expectedMaxItemsPerRow,
      expectedColumnGap,
    );
  });

  it('should limit items per row depending on the width of the List', async () => {
    const expectedItemsPerRow = 4;
    spyOn(ListCardUtils, 'itemsPerRowWidth').and.returnValue(
      expectedItemsPerRow,
    );

    const driver = createDriver(<ListCard listWidth={1} />);

    expect(await driver.isItemsPerRow(expectedItemsPerRow)).toBe(true);
  });

  it('should use amount of items as maxItemsPerRow if lower then maxItemsPerRow', async () => {
    const expectedItemsPerRow = 4;

    const driver = createDriver(<ListCard items={generateItems(expectedItemsPerRow)} maxItemsPerRow={expectedItemsPerRow + 1} listWidth={1000} />);

    expect(await driver.isItemsPerRow(expectedItemsPerRow)).toBe(true);
  });

  it('should use max item width', async () => {
    const expectedItemMaxWidth = 300;

    const driver = createDriver(
      <ListCard listWidth={1} maxItemWidth={expectedItemMaxWidth} />,
    );

    expect(await driver.isItemMaxWidth(expectedItemMaxWidth)).toEqual(true);
  });

  it('should use default max item width', async () => {
    const expectedItemMaxWidth = '100vw';

    const driver = createDriver(<ListCard listWidth={1} />);

    expect(await driver.isItemMaxWidth(expectedItemMaxWidth)).toEqual(true);
  });

  it('should use item key', async () => {
    const items = generateItems(2, true);

    const driver = mount(<ListCard listWidth={1} items={items} />);
    const cardWrappers = driver.find('li');

    expect(cardWrappers.at(0).key()).toEqual(items[0].key);
    expect(cardWrappers.at(1).key()).toEqual(items[1].key);
  });

  it('should use default key', async () => {
    const items = generateItems(2);

    const driver = mount(<ListCard listWidth={1} items={items} />);
    const cardWrappers = driver.find('li');

    expect(cardWrappers.at(0).key()).toEqual('card-container-0');
    expect(cardWrappers.at(1).key()).toEqual('card-container-1');
  });

  it('should use media query if list width is 0', async () => {
    const expectedMaxItemsPerRow = 3;
    const expectedMinItemWidth = 300;
    const expectedMaxItemWidth = 400;
    const expectedColumnGap = 48;
    const expectedListCardId = 'someID';
    spyOn(ListCardUtils, 'getMediaQueries');
    spyOn(ListCardUtils, 'generateListClassId').and.returnValue(expectedListCardId);

    createDriver(
      <ListCard
        maxItemWidth={expectedMaxItemWidth}
        maxItemsPerRow={expectedMaxItemsPerRow}
        minItemWidth={expectedMinItemWidth}
        columnGap={expectedColumnGap}
        items={generateItems(expectedMaxItemsPerRow + 1)}
      />,
    );

    expect(ListCardUtils.getMediaQueries).toHaveBeenCalledWith({
      maxItemWidth: expectedMaxItemWidth,
      maxItemsPerRow: expectedMaxItemsPerRow,
      minItemWidth: expectedMinItemWidth,
      columnGap: expectedColumnGap,
      ListItemClass: styles.listWrapper,
      listCardId: expectedListCardId,
    });
  });

  it('should use amount of items as maxItemsPerRow if lower then maxItemsPerRow on responsive', async () => {
    const expectedMaxItemsPerRow = 3;
    const expectedMinItemWidth = 300;
    const expectedMaxItemWidth = 400;
    const expectedColumnGap = 48;
    const expectedListCardId = 'someID';
    spyOn(ListCardUtils, 'getMediaQueries');
    spyOn(ListCardUtils, 'generateListClassId').and.returnValue(expectedListCardId);

    createDriver(
      <ListCard
        maxItemWidth={expectedMaxItemWidth}
        maxItemsPerRow={expectedMaxItemsPerRow + 1}
        minItemWidth={expectedMinItemWidth}
        columnGap={expectedColumnGap}
        items={generateItems(expectedMaxItemsPerRow)}
      />,
    );

    expect(ListCardUtils.getMediaQueries).toHaveBeenCalledWith({
      maxItemWidth: expectedMaxItemWidth,
      maxItemsPerRow: expectedMaxItemsPerRow,
      minItemWidth: expectedMinItemWidth,
      columnGap: expectedColumnGap,
      ListItemClass: styles.listWrapper,
      listCardId: expectedListCardId,
    });
  });

  it('should use CardComponent Type to determine min width if none was provided', () => {
    spyOn(ListCardUtils, 'getMinWidthByCardType');
    const expectedCardComponent = <div />;

    createDriver(
      <ListCard listWidth={1} items={[{ item: expectedCardComponent }]} />,
    );

    expect(ListCardUtils.getMinWidthByCardType).toHaveBeenCalledWith(
      expectedCardComponent,
    );
  });

  it('should display divider', async () => {
    const driver = createDriver(<ListCard withDivider items={generateItems()}/>);

    expect(await driver.isWithDivider()).toEqual(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<ListCard />, listCardTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <ListCard />,
          enzymeListCardTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
