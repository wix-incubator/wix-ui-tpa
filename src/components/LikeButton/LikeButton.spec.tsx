import * as React from 'react';
import { mount } from 'enzyme';
import { likeButtonDriverFactory } from './LikeButton.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { LikeButton } from '.';
import { likeButtonTestkitFactory } from '../../testkit';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { likeButtonTestkitFactory as enzymeAutocompleteTestkitFactory } from '../../testkit/enzyme';

describe('LikeButton', () => {
  const createDriver = createDriverFactory(likeButtonDriverFactory);

  it('should render', () => {
    const driver = createDriver(<LikeButton />);
    expect(driver.exists()).toBe(true);
  });

  it('should call onChange', () => {
    const onChangeSpy = jest.fn();
    onChangeSpy.mockImplementation(() => Promise.resolve());
    const driver = createDriver(<LikeButton onChange={onChangeSpy} />);
    expect(onChangeSpy).not.toHaveBeenCalled();
    driver.click();
    expect(onChangeSpy).toHaveBeenCalled();
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<LikeButton />, likeButtonTestkitFactory)).toBe(
        true,
      );
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <LikeButton />,
          enzymeAutocompleteTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
