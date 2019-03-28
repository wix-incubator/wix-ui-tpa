import * as React from 'react';
import { inputDriverFactory } from './Input.driver';
import { Input } from './';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { inputTestkitFactory } from '../../testkit';
import { inputTestkitFactory as enzymeInputTestkitFactory } from '../../testkit/enzyme';

describe('Input', () => {
  const createDriver = createDriverFactory(inputDriverFactory);

  it('should render', () => {
    const value = 'hello!';
    const driver = createDriver(<Input value={value} />);
    expect(driver.getValue()).toEqual(value);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(<Input />, inputTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(<Input />, enzymeInputTestkitFactory, mount, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });
});
