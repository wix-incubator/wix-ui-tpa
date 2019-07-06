import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { textButtonDriverFactory } from './TextButton.driver';
import { TEXT_BUTTON_PRIORITY, TextButton } from './';
import { textButtonTestkitFactory } from '../../testkit';
import { textButtonTestkitFactory as enzymeTextButtonTestkitFactory } from '../../testkit/enzyme';

describe('TextButton', () => {
  const createDriver = createUniDriverFactory(textButtonDriverFactory);

  it('should render', async () => {
    const value = 'Hello';
    const driver = createDriver(<TextButton>{value}</TextButton>);
    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonTextContent()).toEqual(value);
  });

  it('should use mobile design', async () => {
    const driver = createDriver(
      TPAComponentsWrapper({ mobile: true })(<TextButton />),
    );
    expect(await driver.isMobile()).toBe(true);
  });

  it('should set priority', async () => {
    const driver = createDriver(
      <TextButton priority={TEXT_BUTTON_PRIORITY.primary} />,
    );
    expect(await driver.hasPriority(TEXT_BUTTON_PRIORITY.primary)).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<TextButton />, textButtonTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <TextButton />,
          enzymeTextButtonTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
