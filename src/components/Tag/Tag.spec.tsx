import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { tagDriverFactory } from './Tag.driver';
import { tagTestkitFactory } from '../../testkit';
import { tagTestkitFactory as enzymeTagTestkitFactory } from '../../testkit/enzyme';
// import { TPAComponentsProvider, TPAComponentsConfig } from '../TPAComponentsConfig';
import { Tag, TagProps } from './';

describe('Tag', () => {
  const createDriver = createUniDriverFactory(tagDriverFactory);

  const bootstrap = (props: Partial<TagProps> = {}/*, contextProps: TPAComponentsConfig = {}*/) => {
    return createDriver(
      // <TPAComponentsProvider value={contextProps}>
        <Tag {...props} />
      // </TPAComponentsProvider>
    );
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<Tag />, tagTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <Tag />,
          enzymeTagTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
