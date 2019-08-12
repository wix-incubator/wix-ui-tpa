import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { checkboxDriverFactory } from './Checkbox.driver';
import { Checkbox } from './';
import { checkboxTestkitFactory } from '../../testkit';
import { checkboxTestkitFactory as enzymeCheckboxTestkitFactory } from '../../testkit/enzyme';

const noop = () => {};
const defProps = {
  onChange: noop,
  label: 'label',
};

describe('Checkbox', () => {
  const createDriver = createUniDriverFactory(checkboxDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Checkbox {...defProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should call onChange with correct "checked" value', async () => {
    const onChangeSpy = jest.fn();
    const driver = createDriver(
      <Checkbox label="Label" onChange={onChangeSpy} />,
    );

    await driver.clickOnCheckbox();

    expect(onChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({ checked: true }),
    );
  });

  it('should show error state', async () => {
    const driver = createDriver(<Checkbox error {...defProps} />);

    expect(await driver.hasError()).toBeTruthy();
  });

  it('should show disabled state', async () => {
    const driver = createDriver(<Checkbox disabled {...defProps} />);

    expect(await driver.hasDisabled()).toBeTruthy();
  });

  it('should show indeterminate state', async () => {
    const driver = createDriver(<Checkbox indeterminate {...defProps} />);

    expect(await driver.hasIndeterminate()).toBeTruthy();
  });

  it('should show checked state', async () => {
    const driver = createDriver(<Checkbox checked {...defProps} />);

    expect(await driver.hasChecked()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Checkbox {...defProps} />,
          checkboxTestkitFactory,
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
          <Checkbox {...defProps} />,
          enzymeCheckboxTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
