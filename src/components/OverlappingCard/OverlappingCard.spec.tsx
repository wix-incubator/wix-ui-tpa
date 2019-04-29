import * as React from 'react';
import { overlappingCardDriverFactory } from './OverlappingCard.driver';
import { OverlappingCard, OverlappingCardRatioOptions } from './';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { overlappingCardTestkitFactory } from '../../testkit';
import { overlappingCardTestkitFactory as enzymeOverlappingCardTestkitFactory } from '../../testkit/enzyme';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

describe('OverlappingCard', () => {
  const createDriver = createUniDriverFactory(overlappingCardDriverFactory);

  it('should render info', async () => {
    const valueAsString = '<div>info!</div>';
    const value = <div dangerouslySetInnerHTML={{ __html: valueAsString }} />;
    const driver = createDriver(<OverlappingCard info={value} />);
    expect((await driver.getInfoContent()).innerHTML).toEqual(valueAsString);
  });

  it('should render image', async () => {
    const valueAsString = '<div>image!</div>';
    const value = <div dangerouslySetInnerHTML={{ __html: valueAsString }} />;
    const driver = createDriver(<OverlappingCard media={value} />);
    expect((await driver.getMediaContent()).innerHTML).toEqual(valueAsString);
  });

  it('should render ratio 50 as default', async () => {
    const driver = createDriver(<OverlappingCard info="info" media="media" />);
    expect(await driver.getRatio()).toEqual(
      OverlappingCardRatioOptions.RATIO_50_50,
    );
  });

  it('should render ratio 40', async () => {
    const driver = createDriver(
      <OverlappingCard
        ratio={OverlappingCardRatioOptions.RATIO_40_60}
        info="info"
        media="media"
      />,
    );
    expect(await driver.getRatio()).toEqual(
      OverlappingCardRatioOptions.RATIO_40_60,
    );
  });

  it('should render ratio 30', async () => {
    const driver = createDriver(
      <OverlappingCard
        ratio={OverlappingCardRatioOptions.RATIO_30_70}
        info="info"
        media="media"
      />,
    );
    expect(await driver.getRatio()).toEqual(
      OverlappingCardRatioOptions.RATIO_30_70,
    );
  });

  it('should render ratio 100 if there is no media', async () => {
    const driver = createDriver(<OverlappingCard info="info" />);
    expect(await driver.getRatio()).toEqual(
      OverlappingCardRatioOptions.RATIO_100,
    );
  });

  it('should flipped the ratio', async () => {
    const driver = createDriver(<OverlappingCard flippedRatio />);
    expect(await driver.isFlippedRatio()).toEqual(true);
  });

  it('should invert the image position', async () => {
    const driver = createDriver(<OverlappingCard invertInfoPosition />);
    expect(await driver.isImagePositionInverted()).toEqual(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <OverlappingCard />,
          overlappingCardTestkitFactory,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <OverlappingCard />,
          enzymeOverlappingCardTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
