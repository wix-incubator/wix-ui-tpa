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

describe('Checkbox', () => {
  const createDriver = createUniDriverFactory(checkboxDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Checkbox onChange={noop} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should call onChange with correct "checked" value', async () => {
    const onChangeSpy = jest.fn();
    const driver = createDriver(<Checkbox onChange={onChangeSpy} />);

    await driver.clickOnCheckbox();

    expect(onChangeSpy).toHaveBeenCalledWith(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Checkbox onChange={noop} />,
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
          <Checkbox onChange={noop} />,
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
