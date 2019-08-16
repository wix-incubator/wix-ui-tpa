import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { checkboxGroupDriverFactory } from './CheckboxGroup.driver';
import { CheckboxGroup } from './';
import { Checkbox } from '../Checkbox';
import { checkboxGroupTestkitFactory } from '../../testkit';
import { checkboxGroupTestkitFactory as enzymeCheckboxGroupTestkitFactory } from '../../testkit/enzyme';

const el = (
  <CheckboxGroup>
    <Checkbox
      name="group1"
      onChange={val => console.log(val)}
      label="Checkbox 1️⃣"
    />
    <Checkbox
      name="group1"
      onChange={val => console.log(val)}
      label="Checkbox 2️⃣"
    />
    <Checkbox
      name="group1"
      onChange={val => console.log(val)}
      label="Checkbox 3️⃣"
    />
  </CheckboxGroup>
);

describe('CheckboxGroup', () => {
  const createDriver = createUniDriverFactory(checkboxGroupDriverFactory);

  it('should render', async () => {
    const driver = createDriver(el);
    expect(await driver.exists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <CheckboxGroup />,
          checkboxGroupTestkitFactory,
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
