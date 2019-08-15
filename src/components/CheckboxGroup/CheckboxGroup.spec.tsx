import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { checkboxGroupDriverFactory } from './CheckboxGroup.driver';
import { CheckboxGroup } from './';
import { checkboxGroupTestkitFactory } from '../../testkit';
import { checkboxGroupTestkitFactory as enzymeCheckboxGroupTestkitFactory } from '../../testkit/enzyme';

describe('CheckboxGroup', () => {
  const createDriver = createUniDriverFactory(checkboxGroupDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<CheckboxGroup buttonText="Click Me" />);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(<CheckboxGroup />, checkboxGroupTestkitFactory, {
          dataHookPropName: 'data-hook',
        }),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <CheckboxGroup />,
          enzymeCheckboxGroupTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
