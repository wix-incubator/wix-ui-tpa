import * as React from 'react';
import { cardDriverFactory } from './Card.driver';
import { Card, CardRatioOptions } from './';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { cardTestkitFactory } from '../../testkit';
import { cardTestkitFactory as enzymeCardTestkitFactory } from '../../testkit/enzyme';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

describe('Card', () => {
  const createDriver = createUniDriverFactory(cardDriverFactory);

  it('should render info', async () => {
    const value = 'info!';
    const driver = createDriver(<Card info={value} />);
    expect(await driver.getInfoContent()).toEqual(value);
  });

  it('should render image', async () => {
    const value = 'image!';
    const driver = createDriver(<Card media={value} />);
    expect(await driver.getMediaContent()).toEqual(value);
  });

  it('should render ratio 50 as default', async () => {
    const driver = createDriver(<Card info="info" media="media" />);
    expect(await driver.getRatio()).toEqual(CardRatioOptions.RATIO_50_50);
  });

  it('should render ratio 40', async () => {
    const driver = createDriver(
      <Card ratio={CardRatioOptions.RATIO_40_60} info="info" media="media" />,
    );
    expect(await driver.getRatio()).toEqual(CardRatioOptions.RATIO_40_60);
  });

  it('should render ratio 30', async () => {
    const driver = createDriver(
      <Card ratio={CardRatioOptions.RATIO_30_70} info="info" media="media" />,
    );
    expect(await driver.getRatio()).toEqual(CardRatioOptions.RATIO_30_70);
  });

  it('should render ratio 100 if there is no media', async () => {
    const driver = createDriver(<Card info="info" />);
    expect(await driver.getRatio()).toEqual(CardRatioOptions.RATIO_100);
  });

  it('should flipped the ratio', async () => {
    const driver = createDriver(<Card flippedRatio />);
    expect(await driver.hasFlippedRatioState()).toEqual(true);
  });

  it('should invert the image position', async () => {
    const driver = createDriver(<Card invertInfoPosition />);
    expect(await driver.hasInvertImagePositionState()).toEqual(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Card />, cardTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Card />,
          enzymeCardTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
