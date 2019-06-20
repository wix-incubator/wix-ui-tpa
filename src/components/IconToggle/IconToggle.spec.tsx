import * as React from 'react';
import { mount } from 'enzyme';
import { iconToggleDriverFactory } from './IconToggle.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { IconToggle } from '.';
import { iconToggleTestkitFactory } from '../../testkit';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { iconToggleTestkitFactory as enzymeAutocompleteTestkitFactory } from '../../testkit/enzyme';

describe('IconToggle', () => {
  const createDriver = createDriverFactory(iconToggleDriverFactory);

  it('should render', () => {
    const driver = createDriver(<IconToggle icon={<div />} />);
    expect(driver.exists()).toBe(true);
  });

  it('should call onChange', () => {
    const onChangeSpy = jest.fn();
    onChangeSpy.mockImplementation(() => Promise.resolve());
    const driver = createDriver(
      <IconToggle icon={<div />} onChange={onChangeSpy} />,
    );
    expect(onChangeSpy).not.toHaveBeenCalled();
    driver.click();
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    const driver = createDriver(<IconToggle icon={<div />} disabled />);
    expect(driver.isDisabled()).toBe(true);
  });

  it('should be checked', () => {
    const driver = createDriver(<IconToggle icon={<div />} checked />);
    expect(driver.isChecked()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(
          <IconToggle icon={<div />} />,
          iconToggleTestkitFactory,
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <IconToggle icon={<div />} />,
          enzymeAutocompleteTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
