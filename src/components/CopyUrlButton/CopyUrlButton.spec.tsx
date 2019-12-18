import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { copyUrlButtonDriverFactory } from './CopyUrlButton.driver';
import { CopyUrlButton } from './';
import { copyUrlButtonTestkitFactory } from '../../testkit';
import { copyUrlButtonTestkitFactory as enzymeCopyUrlButtonTestkitFactory } from '../../testkit/enzyme';

describe('CopyUrlButton', () => {
  const createDriver = createUniDriverFactory(copyUrlButtonDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<CopyUrlButton buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <CopyUrlButton />,
          copyUrlButtonTestkitFactory,
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
          <CopyUrlButton />,
          enzymeCopyUrlButtonTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
