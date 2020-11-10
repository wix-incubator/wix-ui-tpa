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
