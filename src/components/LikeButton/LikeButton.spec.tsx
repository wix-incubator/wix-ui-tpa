import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { likeButtonDriverFactory } from './LikeButton.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { LikeButton, LabelPlacement } from '.';
import { likeButtonTestkitFactory } from '../../testkit';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { likeButtonTestkitFactory as enzymeAutocompleteTestkitFactory } from '../../testkit/enzyme';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';

describe('LikeButton', () => {
  const createDriver = createDriverFactory(likeButtonDriverFactory);
  const LABEL = 'Label';
  const ICON = <Heart />;

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

  it('should render label', () => {
    const driver = createDriver(<LikeButton label={LABEL} />);
    expect(driver.getLabel().textContent).toBe(LABEL);
  });

  it('should not render label when empty', () => {
    const driver = createDriver(<LikeButton label="" />);
    expect(driver.getLabel()).toBe(null);
  });

  it('should render Heart icon', () => {
    const driver = createDriver(<LikeButton />);
    expect(driver.getIcon().innerHTML).toBe(shallow(ICON).html());
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
