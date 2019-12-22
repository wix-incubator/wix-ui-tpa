import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { proGalleryDriverFactory } from './ProGallery.driver';
import { ProGallery } from './';
import { proGalleryTestkitFactory } from '../../testkit';
import { proGalleryTestkitFactory as enzymeProGalleryTestkitFactory } from '../../testkit/enzyme';

describe('ProGallery', () => {
  const createDriver = createUniDriverFactory(proGalleryDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<ProGallery buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<ProGallery />, proGalleryTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <ProGallery />,
          enzymeProGalleryTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
