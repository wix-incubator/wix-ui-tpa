import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { proGalleryDriverFactory } from './ProGallery.driver';
import { ProGallery } from './';
import { proGalleryTestkitFactory } from '../../testkit';
import { proGalleryTestkitFactory as enzymeProGalleryTestkitFactory } from '../../testkit/enzyme';
import { domId, proGalleryItems, proGalleryOptions } from './docs/examples';
import * as _ from 'lodash';
import * as ReactDomServer from 'react-dom/server';

describe('ProGallery', () => {
  const createDriver = createUniDriverFactory(proGalleryDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <ProGallery
        domId={domId}
        scrollingElement={e => e.target.parentNode}
        eventsListener={_.noop}
        options={proGalleryOptions[0]}
        items={proGalleryItems}
        height={500}
        width={500}
      />,
    );
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <ProGallery
            domId={domId}
            scrollingElement={e => e.target.parentNode}
            eventsListener={_.noop}
            options={proGalleryOptions[0]}
            items={proGalleryItems}
            height={500}
            width={500}
          />,
          proGalleryTestkitFactory,
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
          <ProGallery
            domId={domId}
            scrollingElement={e => e.target.parentNode}
            eventsListener={_.noop}
            options={proGalleryOptions[0]}
            items={proGalleryItems}
            height={500}
            width={500}
          />,
          enzymeProGalleryTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });

    it('foo', () => {
      const string = ReactDomServer.renderToString(
        <ProGallery
          domId={domId}
          scrollingElement={e => e.target.parentNode}
          eventsListener={_.noop}
          options={proGalleryOptions[0]}
          items={proGalleryItems}
          height={500}
          width={500}
        />,
      );

      console.log(string);
    });
  });
});
