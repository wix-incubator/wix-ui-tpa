import * as React from 'react';
import {inputDriverFactory} from './Input.driver';
import {Input} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {inputTestkitFactory} from '../../testkit';
import {inputTestkitFactory as enzymeInputTestkitFactory} from '../../testkit/enzyme';

describe('Input', () => {
  const createDriver = createDriverFactory(inputDriverFactory);

  it('should render', () => {
    const value = 'hello!';
    const driver = createDriver(<Input value={value}/>);
    expect(driver.getValue()).toEqual(value);
  });

  describe('error message', () => {
    it('should show an error message', () => {
      const errorMessage = 'some error';
      const driver = createDriver(<Input error errorMessage={errorMessage}/>);
      expect(driver.getErrorMessage()).toEqual(errorMessage);
    });

    it('should define an empty state', () => {
      const driver = createDriver(<Input/>);
      expect(driver.hasEmptyState()).toBeTruthy();
    });

    it('should not show an error message if not in error state', () => {
      const errorMessage = 'some error';
      const driver = createDriver(<Input errorMessage={errorMessage}/>);
      expect(driver.hasErrorMessage()).toBeFalsy();
    });

  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Input/>, inputTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Input/>, enzymeInputTestkitFactory, mount)).toBe(true);
    });
  });
});
