import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { iconToggleDriverFactory } from './IconToggle.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { IconToggle, LabelPlacement } from '.';
import { iconToggleTestkitFactory } from '../../testkit';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { iconToggleTestkitFactory as enzymeAutocompleteTestkitFactory } from '../../testkit/enzyme';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';

const ICON = <Heart />;
const LABEL = 'Like';

describe('IconToggle', () => {
  const createDriver = createDriverFactory(iconToggleDriverFactory);

  it('should render', () => {
    const driver = createDriver(<IconToggle icon={ICON} />);
    expect(driver.exists()).toBe(true);
  });

  it('should render label', () => {
    const driver = createDriver(<IconToggle icon={ICON} label={LABEL} />);
    expect(driver.getLabel().textContent).toBe(LABEL);
  });

  it('should not render label when empty', () => {
    const driver = createDriver(<IconToggle icon={ICON} label="" />);
    expect(driver.getLabel()).toBe(null);
  });

  it('should render label at start', () => {
    const driver = createDriver(
      <IconToggle
        icon={ICON}
        label={LABEL}
        labelPlacement={LabelPlacement.START}
      />,
    );
    expect(driver.getLabelPlacement()).toBe(LabelPlacement.START);
  });

  it('by default should render label at end', () => {
    const driver = createDriver(<IconToggle icon={ICON} label={LABEL} />);
    expect(driver.getLabelPlacement()).toBe(LabelPlacement.END);
  });

  it('should render icon', () => {
    const driver = createDriver(<IconToggle icon={ICON} />);
    expect(driver.getIcon().innerHTML).toBe(shallow(ICON).html());
  });

  it('should call onChange with actual value', () => {
    const onChangeSpy = jest.fn();
    onChangeSpy.mockImplementation(() => Promise.resolve());
    const driver = createDriver(
      <IconToggle icon={<div />} onChange={onChangeSpy} />,
    );
    expect(onChangeSpy).not.toHaveBeenCalled();
    driver.click();
    expect(onChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({ checked: true }),
    );
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
