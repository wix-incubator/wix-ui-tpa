import { mount } from 'enzyme';
import * as React from 'react';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { HeroImage } from '.';
import { heroImageTestkitFactory } from '../../testkit';
import { heroImageTestkitFactory as enzymeHeroImageTestkitFactory } from '../../testkit/enzyme';
import { heroImageDriverFactory } from './HeroImage.driver';

describe('HeroImage', () => {
  const createDriver = createUniDriverFactory(heroImageDriverFactory);

  const sampleSource = 'c5f754_186e90ba2c9b47de8a4a0a0346865b72~mv2.png';
  const sampleDimensions = { width: 800, height: 300 };

  it('should render', async () => {
    const driver = createDriver(
      <HeroImage src={sampleSource} {...sampleDimensions} />,
    );

    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <HeroImage src={sampleSource} {...sampleDimensions} />,
          heroImageTestkitFactory,
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
          <HeroImage src={sampleSource} {...sampleDimensions} />,
          enzymeHeroImageTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
