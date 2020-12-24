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

  const sampleSources = {
    absolute:
      'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
    relative: 'c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg',
  };
  const sampleAlt = 'Garfield smiles and puts his hand over chest';

  it('should render', async () => {
    const driver = createDriver(<Image src={sampleSources.absolute} />);
    expect(await driver.exists()).toBe(true);
  });

  describe.each(Object.keys(sampleSources))('%s', (sourceType) => {
    const src = sampleSources[sourceType];

    it('should return `src`', async () => {
      const driver = createDriver(<Image src={src} />);
      expect(await driver.getSrc()).toBe(src);
    });

    it('should return `alt`', async () => {
      const driver = createDriver(<Image src={src} alt={sampleAlt} />);
      expect(await driver.getAlt()).toBe(sampleAlt);
    });
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Image src={sampleSources.absolute} />,
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
          <Image src={sampleSources.absolute} />,
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
