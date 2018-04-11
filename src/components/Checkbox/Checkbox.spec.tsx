import * as React from 'react';
import {checkboxDriverFactory} from './Checkbox.driver';
import {Checkbox} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {checkboxTestkitFactory} from '../../testkit';
import {checkboxTestkitFactory as enzymeCheckboxTestkitFactory} from '../../testkit/enzyme';

describe('Checkbox', () => {
  const createDriver = createDriverFactory(checkboxDriverFactory);

  it('should render', () => {
    const value = 'hello!';
    const driver = createDriver(<Checkbox value={value}/>);
    expect(driver.getValue()).toEqual(value);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Checkbox/>, checkboxTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Checkbox/>, enzymeCheckboxTestkitFactory, mount)).toBe(true);
    });
  });
});
