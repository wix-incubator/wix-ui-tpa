import * as React from 'react';
import { tabsDriverFactory } from './Tabs.driver';
import { Tabs } from './';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

describe('Text', () => {
  const createDriver = createDriverFactory(tabsDriverFactory);
  let driver;
  const items = [{ title: 'some-title-1' }, { title: 'some-title-2' }];

  it('should render list of items with titles', () => {
    driver = createDriver(<Tabs items={items} />);
    const expectedTitles = items.map(item => item.title);

    expect(driver.getTitles()).toEqual(expectedTitles);
  });

  it('should call onTabClick callback when clicking on tab item', () => {
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
    driver.clickTabAt(newSelectedIndex);

    expect(onTabClick).toHaveBeenCalledWith(newSelectedIndex);
  });

  it('should not call onTabClick callback when clicking on selected tab item', () => {
    const onTabClick = jest.fn();
    const selectedIndex = 0;
    driver = createDriver(
      <Tabs
        items={items}
        activeTabIndex={selectedIndex}
        onTabClick={onTabClick}
      />,
    );
    driver.clickTabAt(selectedIndex);

    expect(onTabClick).not.toHaveBeenCalled();
  });

  it('should mark active tab', () => {
    const selectedIndex = 1;
    driver = createDriver(
      <Tabs items={items} activeTabIndex={selectedIndex} />,
    );

    expect(driver.getActiveTabIndex()).toBe(selectedIndex);
  });

  it('should set default states stylable states', () => {
    driver = createDriver(<Tabs items={items} activeTabIndex={0} />);

    expect(driver.getSkin()).toBe('underline');
    expect(driver.getVariant()).toBe('standard');
    expect(driver.getAlignment()).toBe('center');
  });

  it('should have border for unselected tabs if skin prop is "underline"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} skin="underline" />,
    );

    expect(driver.getSkin()).toBe('underline');
  });

  it('should not have border for unselected tabs if skin prop is "clear"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} skin="clear" />,
    );

    expect(driver.getSkin()).toBe('clear');
  });

  it('should align content to left when alignment prop is "left"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} alignment="left" />,
    );

    expect(driver.getAlignment()).toBe('left');
  });

  it('should align content to right when alignment prop is "right"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} alignment="right" />,
    );

    expect(driver.getAlignment()).toBe('right');
  });

  it('should align content to center when alignment prop is "center"', () => {
    driver = createDriver(
      <Tabs items={items} activeId={0} alignment="center" />,
    );

    expect(driver.getAlignment()).toBe('center');
  });

  it('should set tabs on all content width', () => {
    driver = createDriver(
      <Tabs items={items} activeId={0} variant="fullWidth" />,
    );

    expect(driver.getVariant()).toBe('fullWidth');
  });
});
