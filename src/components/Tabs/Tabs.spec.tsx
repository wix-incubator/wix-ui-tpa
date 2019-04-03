import * as React from 'react';
import { tabsDriverFactory } from './Tabs.driver';
import { Tabs, TabsProps } from './';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { tabsTestkitFactory } from '../../testkit';
import { tabsTestkitFactory as enzymeTabsTestkitFactory } from '../../testkit/enzyme';

describe('Text', () => {
  const createDriver = createDriverFactory(tabsDriverFactory);
  let driver;
  const items = [
    { id: 'some-id-1', title: 'some-title-1', dataHook: 'tab-item-1' },
    { id: 'some-id-2', title: 'some-title-2', dataHook: 'tab-item-2' },
  ];

  it('should render list of items with titles', () => {
    driver = createDriver(<Tabs items={items} />);
    const expectedTitles = items.map(item => item.title);

    expect(driver.getTitles()).toEqual(expectedTitles);
  });

  it('should call onClick callback when clicking on tab item', () => {
    const onClick = jest.fn();
    const expectedSelectedItem = items[1];
    driver = createDriver(
      <Tabs items={items} activeId={items[0].id} onClick={onClick} />,
    );
    driver.clickTabAt(expectedSelectedItem.dataHook);

    expect(onClick).toHaveBeenCalledWith(expectedSelectedItem);
  });

  it('should not call onClick callback when clicking on selected tab item', () => {
    const onClick = jest.fn();
    const expectedSelectedItem = items[0];
    driver = createDriver(
      <Tabs items={items} activeId={items[0].id} onClick={onClick} />,
    );
    driver.clickTabAt(expectedSelectedItem.dataHook);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should mark active tab', () => {
    const selectedIndex = 1;
    driver = createDriver(
      <Tabs items={items} activeId={items[selectedIndex].id} />,
    );

    expect(driver.getActiveTabIndex()).toBe(selectedIndex);
  });

  it('should set default states stylable states', () => {
    driver = createDriver(<Tabs items={items} activeId={items[0].id} />);

    expect(driver.getSkin()).toBe('underline');
    expect(driver.getContentWidth()).toBe('shrink');
    expect(driver.getContentAlignment()).toBe('center');
  });

  it('should have border for unselected tabs if skin prop is "underline"', () => {
    driver = createDriver(
      <Tabs items={items} activeId={items[0].id} skin="underline" />,
    );

    expect(driver.getSkin()).toBe('underline');
  });

  it('should not have border for unselected tabs if skin prop is "clear"', () => {
    driver = createDriver(
      <Tabs items={items} activeId={items[0].id} skin="clear" />,
    );

    expect(driver.getSkin()).toBe('clear');
  });

  it('should align content to left when contentAlignment prop is "left"', () => {
    driver = createDriver(
      <Tabs items={items} activeId={items[0].id} contentAlignment="left" />,
    );

    expect(driver.getContentAlignment()).toBe('left');
  });

  it('should align content to right when contentAlignment prop is "right"', () => {
    driver = createDriver(
      <Tabs items={items} activeId={items[0].id} contentAlignment="right" />,
    );

    expect(driver.getContentAlignment()).toBe('right');
  });

  it('should align content to center when contentAlignment prop is "center"', () => {
    driver = createDriver(
      <Tabs items={items} activeId={items[0].id} contentAlignment="center" />,
    );

    expect(driver.getContentAlignment()).toBe('center');
  });

  it('should stretch tabs on all the content width', () => {
    driver = createDriver(
      <Tabs items={items} activeId={items[0].id} contentWidth="stretch" />,
    );

    expect(driver.getContentWidth()).toBe('stretch');
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(<Tabs items={items} />, tabsTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <Tabs items={items} />,
          enzymeTabsTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
