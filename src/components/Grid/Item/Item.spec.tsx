import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { itemDriverFactory } from './Item.driver';
import { Item } from './Item';
import { DEFAULT_ROW_SPAN, DEFAULT_COLUMN_SPAN } from '../constants';

describe('Grid.Item', () => {
  const createDriver = createUniDriverFactory(itemDriverFactory);

  it('should use default columnSpan', async () => {
    const driver = createDriver(<Item />);

    expect(await driver.columnSpan()).toEqual(DEFAULT_COLUMN_SPAN);
  });

  it('should use default rowSpan', async () => {
    const driver = createDriver(<Item />);

    expect(await driver.rowSpan()).toEqual(DEFAULT_ROW_SPAN);
  });

  it('should use columnSpan', async () => {
    const expectedColumnSpan = 3;

    const driver = createDriver(<Item colSpan={expectedColumnSpan} />);

    expect(await driver.columnSpan()).toEqual(expectedColumnSpan);
  });

  it('should use rowSpan', async () => {
    const expectedRowSpan = 3;

    const driver = createDriver(<Item rowSpan={expectedRowSpan} />);

    expect(await driver.rowSpan()).toEqual(expectedRowSpan);
  });
});
