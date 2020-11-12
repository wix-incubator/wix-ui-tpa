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
    'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg';
  const sampleAlt = 'Garfield smiles and puts his hand over chest';

  it('should render', async () => {
    const driver = createDriver(<Image src={sampleUrl} />);
    expect(await driver.exists()).toBe(true);
  });

  describe('regular image', () => {
    it('should return `src`', async () => {
      const expectedSrc = sampleUrl;
      const driver = createDriver(<Image src={expectedSrc} />);
      expect(await driver.getSrc()).toBe(expectedSrc);
    });

    it('should return `alt`', async () => {
      const expectedAlt = sampleAlt;
      const driver = createDriver(<Image src={sampleUrl} alt={expectedAlt} />);
      expect(await driver.getAlt()).toBe(expectedAlt);
    });
  });

  describe('media image', () => {
    const uri = 'c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg';
    const width = 300;
    const height = 250;

    it('should return `src`', async () => {
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

    it('should return `alt`', async () => {
      const expectedAlt = sampleAlt;
      const driver = createDriver(
        <Image
          mediaItem={{
            uri,
            width,
            height,
          }}
          alt={expectedAlt}
        />,
      );
      expect(await driver.getAlt()).toBe(expectedAlt);
    });
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
