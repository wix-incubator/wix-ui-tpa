import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { progressBarDriverFactory } from './ProgressBar.driver';
import { ProgressBar } from './';
import { progressBarTestkitFactory } from '../../testkit';
import { progressBarTestkitFactory as enzymeProgressBarTestkitFactory } from '../../testkit/enzyme';

describe('ProgressBar', () => {
  const createDriver = createUniDriverFactory(progressBarDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<ProgressBar value={20} />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<ProgressBar />, progressBarTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <ProgressBar />,
          enzymeProgressBarTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
