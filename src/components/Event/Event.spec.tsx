import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { eventDriverFactory } from './Event.driver';
import { Event } from './';
import { eventTestkitFactory } from '../../testkit';
import { eventTestkitFactory as enzymeEventTestkitFactory } from '../../testkit/enzyme';

const defaultProps = {
  time: '23:23',
  title: '10nis Movie!',
};

describe('Event', () => {
  const createDriver = createUniDriverFactory(eventDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Event {...defaultProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should show selected state', async () => {
    const driver = createDriver(<Event selected {...defaultProps} />);
    expect(await driver.isSelected()).toBe(true);
  });

  it('should show fullday state', async () => {
    const driver = createDriver(<Event fullday {...defaultProps} />);
    expect(await driver.isFullday()).toBe(true);
  });

  it('should show time shown state', async () => {
    const driver = createDriver(<Event showTime {...defaultProps} />);
    expect(await driver.isTimeShown()).toBe(true);
  });

  it('should be button', async () => {
    const driver = createDriver(<Event onClick={() => {}} {...defaultProps} />);
    expect(await driver.isButton()).toBe(true);
  });

  it('should show aria-expanded state', async () => {
    const driver = createDriver(<Event aria-expanded {...defaultProps} />);
    expect(await driver.hasAriaExpanded()).toBe(true);
  });

  it('should show aria-has-popup state', async () => {
    const driver = createDriver(<Event aria-has-popup {...defaultProps} />);
    expect(await driver.hasAriaHasPopup()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Event {...defaultProps} />,
          eventTestkitFactory,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Event {...defaultProps} />,
          enzymeEventTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
