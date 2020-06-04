import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { pickerDriverFactory } from './Picker.driver';
import { Picker } from './';
import { pickerTestkitFactory } from '../../testkit';
import { pickerTestkitFactory as enzymePickerTestkitFactory } from '../../testkit/enzyme';

const noop = () => {};
const defProps = {
  onPrev: noop,
  onNext: noop,
  value: 'October 2020',
};

describe('Picker', () => {
  const createDriver = createUniDriverFactory(pickerDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Picker {...defProps} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should show arrow size set state', async () => {
    const arrowsSize = '24px';
    const driver = createDriver(
      <Picker arrowsSize={arrowsSize} {...defProps} />,
    );

    expect(await driver.isArrowsSizeSet(arrowsSize)).toBeTruthy();
  });

  it('shold click next', async () => {
    const driver = createDriver(<Picker {...defProps} />);
    expect(await driver.clickOnNext()).toBe(null);
  });

  it('shold click prev', async () => {
    const driver = createDriver(<Picker {...defProps} />);
    expect(await driver.clickOnPrev()).toBe(null);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <Picker {...defProps} />,
          pickerTestkitFactory,
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
          <Picker {...defProps} />,
          enzymePickerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
