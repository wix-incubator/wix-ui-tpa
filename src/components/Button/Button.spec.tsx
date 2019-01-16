import * as React from 'react';
import {buttonDriverFactory} from './Button.driver';
import {Button} from './';
import {isUniEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isUniTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {buttonTestkitFactory} from '../../testkit';
import {buttonTestkitFactory as enzymeButtonTestkitFactory} from '../../testkit/enzyme';
import {createUniDriverFactory} from 'wix-ui-test-utils/uni-driver-factory';

describe('Button', () => {
  const createDriver = createUniDriverFactory(buttonDriverFactory);

  it('should render', () => {
    const value = 'hello!';
    const driver = createDriver(<Button>{value}</Button>);
    expect(driver.getButtonTextContent()).resolves.toEqual(value);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isUniTestkitExists(<Button/>, buttonTestkitFactory)).resolves.toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isUniEnzymeTestkitExists(<Button/>, enzymeButtonTestkitFactory, mount)).resolves.toBe(true);
    });
  });
});
