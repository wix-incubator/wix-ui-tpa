import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { TPAComponentsWrapper } from '../../test/utils';
import { colorPickerDriverFactory } from './ColorPicker.driver';
import { ColorPicker } from './';
import { colorPickerTestkitFactory } from '../../testkit';
import { colorPickerTestkitFactory as enzymeColorPickerTestkitFactory } from '../../testkit/enzyme';

describe('ColorPicker', () => {
  const createDriver = createUniDriverFactory(colorPickerDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<ColorPicker />);
    expect(await driver.exists()).toBe(true);
  });

  // describe('testkit', () => {
  //   it('should exist', async () => {
  //     expect(
  //       await isUniTestkitExists(<ColorPicker />, colorPickerTestkitFactory, {
  //         dataHookPropName: 'data-hook',
  //       }),
  //     ).toBe(true);
  //   });
  // });
  //
  // describe('enzyme testkit', () => {
  //   it('should exist', async () => {
  //     expect(
  //       await isUniEnzymeTestkitExists(
  //         <ColorPicker />,
  //         enzymeColorPickerTestkitFactory,
  //         mount,
  //         {
  //           dataHookPropName: 'data-hook',
  //         },
  //       ),
  //     ).toBe(true);
  //   });
  // });
});
