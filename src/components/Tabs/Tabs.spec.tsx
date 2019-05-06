import * as React from 'react';
import { tabsDriverFactory } from './Tabs.driver';
import { ALIGNMENT, SKIN, Tabs, VARIANT } from './';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { TPAComponentsWrapper } from '../../test/utils';

describe('Text', () => {
  const createDriver = createDriverFactory(tabsDriverFactory);
  let driver;
  const items = [{ title: 'some-title-1' }, { title: 'some-title-2' }];

  it('should render list of items with titles', () => {
    driver = createDriver(<Tabs items={items} activeTabIndex={1} />);

    const expectedTitles = items.map(item => item.title);
    const receivedTitles = Array(items.length)
      .fill(0)
      .map((_, index) => driver.getTitleAt(index));
    expect(receivedTitles).toEqual(expectedTitles);
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

    expect(driver.getSkin()).toBe('fullUnderline');
    expect(driver.getVariant()).toBe('fit');
    expect(driver.getAlignment()).toBe('center');
  });

  it('should have divider when skin prop is "fullUnderline"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} skin={SKIN.fullUnderline} />,
    );

    expect(driver.getSkin()).toBe('fullUnderline');
  });

  it('should not have divider when skin prop is "clear"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} skin={SKIN.clear} />,
    );

    expect(driver.getSkin()).toBe('clear');
  });

  it('should have divider that fits tab width when skin prop is "fitUnderline"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} skin={SKIN.fitUnderline} />,
    );

    expect(driver.getSkin()).toBe('fitUnderline');
  });

  it('should align content to left when alignment prop is "left"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} alignment={ALIGNMENT.left} />,
    );

    expect(driver.getAlignment()).toBe('left');
  });

  it('should align content to right when alignment prop is "right"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} alignment={ALIGNMENT.right} />,
    );

    expect(driver.getAlignment()).toBe('right');
  });

  it('should align content to center when alignment prop is "center"', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} alignment={ALIGNMENT.center} />,
    );

    expect(driver.getAlignment()).toBe('center');
  });

  it('should set tabs on all content width', () => {
    driver = createDriver(
      <Tabs items={items} activeTabIndex={0} variant={VARIANT.fullWidth} />,
    );

    expect(driver.getVariant()).toBe('fullWidth');
  });

  it('should use mobile design', () => {
    driver = createDriver(
      TPAComponentsWrapper({mobile: true})(<Tabs items={items} activeTabIndex={0} />),
    );

    expect(driver.isMobile()).toEqual(true);
  });
});
