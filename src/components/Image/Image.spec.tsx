import { mount } from 'enzyme';
import * as React from 'react';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { imageTestkitFactory } from '../../testkit';
import { imageTestkitFactory as enzymeImageTestkitFactory } from '../../testkit/enzyme';
import { Image } from './';
import { imageDriverFactory } from './Image.driver';

describe('Image', () => {
  const createDriver = createUniDriverFactory(imageDriverFactory);
  const sampleUrl =
    'https://static.wixstatic.com/media/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg/v1/fill/w_576,h_430,al_c,lg_1,q_80/c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.webp';

  it('should render', async () => {
    const driver = createDriver(<Image src={sampleUrl} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should return the `src`', async () => {
    const expectedSrc = `something`;
    const driver = createDriver(<Image src={expectedSrc} />);
    expect(await driver.getSrc()).toBe(expectedSrc);
  });

  it('should return the combined `src` when having media item', async () => {
    const uri = 'c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg';
    const width = 300;
    const height = 250;
    const expectedSrc = `https://static.wixstatic.com/media/${uri}/v1/fill/w_${width},h_${height},al_c,q_80/${uri}`;
    const driver = createDriver(
      <Image
        mediaItem={{
          uri,
          width,
          height,
        }}
      />,
    );
    expect(await driver.getSrc()).toBe(expectedSrc);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Image src={sampleUrl} />,
          imageTestkitFactory,
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
          <Image src={sampleUrl} />,
          enzymeImageTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
