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

  it.skip('should render', () => {
    const props = {
      'data-hook': 'storybook-Checkbox',
      onChange: () => null,
      checked: true,
      labelText: 'Checkbox label text',
      error: true,
      errorMessage: 'Checkbox is required'
    };
    const driver = createDriver(<Checkbox {...props}/>);
    expect(driver.isChecked()).toEqual(props.checked);
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
