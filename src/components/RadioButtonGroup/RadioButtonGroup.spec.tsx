import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { radioButtonGroupDriverFactory } from './RadioButtonGroup.driver';
import { RadioButtonGroup } from './';
import { radioButtonGroupTestkitFactory } from '../../testkit';
import { radioButtonGroupTestkitFactory as enzymeRadioButtonGroupTestkitFactory } from '../../testkit/enzyme';
import { RadioButton } from '../RadioButton';

const noop = () => {};
const TestComp: React.FunctionComponent<any> = props => (
  <RadioButtonGroup {...props}>
    <RadioButton value="group1" onChange={noop} label="Checkbox 1️⃣" />
    <RadioButton value="group1" onChange={noop} label="Checkbox 2️⃣" />
    <RadioButton value="group1" onChange={noop} label="Checkbox 3️⃣" />
  </RadioButtonGroup>
);

describe('RadioButtonGroup', () => {
  const createDriver = createUniDriverFactory(radioButtonGroupDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<RadioButtonGroup name={'name'} />);
    expect(await driver.exists()).toBe(true);
  });
  it('should render with children', async () => {
    const driver = createDriver(<TestComp />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.isRadioButtonsExists()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <RadioButtonGroup name={'name'} />,
          radioButtonGroupTestkitFactory,
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
          <RadioButtonGroup name={'name'} />,
          enzymeRadioButtonGroupTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
