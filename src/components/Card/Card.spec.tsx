import * as React from 'react';
import { cardDriverFactory } from './Card.driver';
import { Card, CardRatioOptions } from './';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { cardTestkitFactory } from '../../testkit';
import { cardTestkitFactory as enzymeCardTestkitFactory } from '../../testkit/enzyme';

describe('Card', () => {
  const createDriver = createDriverFactory(cardDriverFactory);

  it('should render info', () => {
    const value = 'info!';
    const driver = createDriver(<Card info={value} />);
    expect(driver.getInfoContent()).toEqual(value);
  });

  it('should render image', () => {
    const value = 'image!';
    const driver = createDriver(<Card media={value} />);
    expect(driver.getMediaContent()).toEqual(value);
  });

  it('should render ratio 50 as default', () => {
    const driver = createDriver(<Card />);
    expect(driver.getRatio()).toEqual(CardRatioOptions.RATIO_50_50);
  });

  it('should render ratio 40', () => {
    const driver = createDriver(<Card ratio={CardRatioOptions.RATIO_40_60} />);
    expect(driver.getRatio()).toEqual(CardRatioOptions.RATIO_40_60);
  });

  it('should render ratio 30', () => {
    const driver = createDriver(<Card ratio={CardRatioOptions.RATIO_30_70} />);
    expect(driver.getRatio()).toEqual(CardRatioOptions.RATIO_30_70);
  });

  it('should flipped the ratio', () => {
    const driver = createDriver(<Card flippedRatio />);
    expect(driver.hasFlippedRatioState()).toEqual(true);
  });

  it('should invert the image position', () => {
    const driver = createDriver(<Card invertInfoPosition />);
    expect(driver.hasInvertImagePositionState()).toEqual(true);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(
        isTestkitExists(<Card />, cardTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(<Card />, enzymeCardTestkitFactory, mount, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });
});
