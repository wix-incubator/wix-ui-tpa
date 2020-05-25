import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
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
    const driver = createDriver(<Event isSelected {...defaultProps} />);
    expect(await driver.isSelected()).toBe(true);
  });

  it('should show multiday state', async () => {
    const driver = createDriver(<Event isMultiday {...defaultProps} />);
    expect(await driver.isMultiday()).toBe(true);
  });

  it('should show right-to-left state', async () => {
    const driver = createDriver(<Event isRightToLeft {...defaultProps} />);
    expect(await driver.isRightToLeft()).toBe(true);
  });

  it('should show time shown state', async () => {
    const driver = createDriver(<Event isTimeShown {...defaultProps} />);
    expect(await driver.isTimeShown()).toBe(true);
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
