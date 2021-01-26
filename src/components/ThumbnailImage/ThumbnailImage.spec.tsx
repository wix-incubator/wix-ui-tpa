import { mount } from 'enzyme';
import * as React from 'react';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { ThumbnailImage } from '.';
import { thumbnailImageTestkitFactory } from '../../testkit';
import { thumbnailImageTestkitFactory as enzymeThumbnailImageTestkitFactory } from '../../testkit/enzyme';
import { thumbnailImageDriverFactory } from './ThumbnailImage.driver';

describe('ThumbnailImage', () => {
  const createDriver = createUniDriverFactory(thumbnailImageDriverFactory);

  const sampleSource = 'c5f754_f4ccb2e3ed75479dbfd55e02ef9c47e8~mv2.png';
  const sampleDimensions = { width: 300, height: 300 };

  it('should render', async () => {
    const driver = createDriver(
      <ThumbnailImage src={sampleSource} {...sampleDimensions} />,
    );

    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <ThumbnailImage src={sampleSource} {...sampleDimensions} />,
          thumbnailImageTestkitFactory,
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
          <ThumbnailImage src={sampleSource} {...sampleDimensions} />,
          enzymeThumbnailImageTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
