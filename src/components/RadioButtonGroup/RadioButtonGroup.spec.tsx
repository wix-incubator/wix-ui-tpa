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
const TestComp: React.FunctionComponent<any> = (props) => (
  <RadioButtonGroup {...props}>
    <RadioButton
      value="group1"
      data-hook={'radio'}
      onChange={noop}
      label="RadioButton 1"
    />
    <RadioButton
      value="group1"
      data-hook={'radio'}
      onChange={noop}
      label="RadioButton 2"
    />
    <RadioButton
      value="group1"
      data-hook={'radio'}
      onChange={noop}
      label="RadioButton 3"
    />
  </RadioButtonGroup>
);

describe('RadioButtonGroup', () => {
  const createDriver = createUniDriverFactory(radioButtonGroupDriverFactory);

  it('should render', async () => {
    const driver = createDriver(
      <RadioButtonGroup onChange={() => {}} name={'name'} />,
    );
    expect(await driver.exists()).toBe(true);
  });
  it('should render with children', async () => {
    const driver = createDriver(<TestComp />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getItemsCount('radio')).toBe(3);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <RadioButtonGroup onChange={() => {}} name={'name'} />,
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
          <RadioButtonGroup onChange={() => {}} name={'name'} />,
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
