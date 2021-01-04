import * as React from 'react';
import { tabsDriverFactory } from './Tabs.driver';
import { Tabs, SKIN, ALIGNMENT, VARIANT } from './';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { TPAComponentsWrapper } from '../../test/utils';

describe('Tabs', () => {
  const createDriver = createUniDriverFactory(tabsDriverFactory);
  let driver;
  const items = [{ title: 'some-title-1' }, { title: 'some-title-2' }];

  it('should render list of items with titles', async () => {
    driver = createDriver(<Tabs items={items} activeTabIndex={1} />);

    const expectedTitles = items.map((item) => item.title);
    const receivedTitles = await Promise.all(
      Array(items.length)
        .fill(0)
        .map((_, index) => driver.getTitleAt(index)),
    );

    expect(receivedTitles).toEqual(expectedTitles);
  });

  it('should call onTabClick callback when clicking on tab item', async () => {
    const onTabClick = jest.fn();
    const currentSelectedIndex = 0;
    const newSelectedIndex = 1;
    driver = createDriver(
      <Tabs
        items={items}
        activeTabIndex={currentSelectedIndex}
        onTabClick={onTabClick}
      />,
    );
    await driver.clickTabAt(newSelectedIndex);

    expect(onTabClick).toHaveBeenCalledWith(newSelectedIndex);
  });

  it('should not call onTabClick callback when clicking on selected tab item', async () => {
    const onTabClick = jest.fn();
    const selectedIndex = 0;
    driver = createDriver(
      <Tabs
        items={items}
        activeTabIndex={selectedIndex}
        onTabClick={onTabClick}
      />,
    );
    await driver.clickTabAt(selectedIndex);

    expect(onTabClick).not.toHaveBeenCalled();
  });

  it('should mark active tab', async () => {
    const selectedIndex = 1;
    driver = createDriver(
      <Tabs items={items} activeTabIndex={selectedIndex} />,
    );

    expect(await driver.getActiveTabIndex()).toBe(selectedIndex);
  });

  it('should set default states stylable states', async () => {
    driver = createDriver(<Tabs items={items} activeTabIndex={0} />);

    expect(await driver.getSkin()).toBe('fullUnderline');
    expect(await driver.getVariant()).toBe('fit');
    expect(await driver.getAlignment()).toBe('center');
  });

  it('should have divider when skin prop is "fullUnderline"', async () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} skin={SKIN.fullUnderline} />,
    );

    expect(await driver.getSkin()).toBe('fullUnderline');
  });

  it('should not have divider when skin prop is "clear"', async () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} skin={SKIN.clear} />,
    );

    expect(await driver.getSkin()).toBe('clear');
  });

  it('should have divider that fits tab width when skin prop is "fitUnderline"', async () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} skin={SKIN.fitUnderline} />,
    );

    expect(await driver.getSkin()).toBe('fitUnderline');
  });

  it('should align content to left when alignment prop is "left"', async () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} alignment={ALIGNMENT.left} />,
    );

    expect(await driver.getAlignment()).toBe('left');
  });

  it('should align content to right when alignment prop is "right"', async () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} alignment={ALIGNMENT.right} />,
    );

    expect(await driver.getAlignment()).toBe('right');
  });

  it('should align content to center when alignment prop is "center"', async () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} alignment={ALIGNMENT.center} />,
    );

    expect(await driver.getAlignment()).toBe('center');
  });

  it('should set tabs on all content width', async () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} variant={VARIANT.fullWidth} />,
    );

    expect(await driver.getVariant()).toBe('fullWidth');
  });

  it('should use mobile design', async () => {
    driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(
        <Tabs items={items} activeTabIndex={0} />,
      ),
    );

    expect(await driver.isMobile()).toEqual(true);
  });
});
