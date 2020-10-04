import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { mount } from 'enzyme';
import { colorPickerDriverFactory } from './ColorPicker.driver';
import { ColorPicker } from './';
import { colorPickerTestkitFactory } from '../../testkit';
import { colorPickerTestkitFactory as enzymeColorPickerTestkitFactory } from '../../testkit/enzyme';
import { eventually } from 'wix-ui-test-utils/dist/src/protractor/utils';

describe('ColorPicker', () => {
  const createDriver = createUniDriverFactory(colorPickerDriverFactory);
  const bootstrap = (props = {}) => {
    const dataHook = 'compDataHook';
    const compProps = {
      'data-hook': dataHook,
      onChange: () => {},
      ...props,
    };
    return createDriver(<ColorPicker {...compProps} />);
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  it('should call onChange callback (select by index)', async () => {
    const onChange = jest.fn();
    const driver = bootstrap({
      children: <ColorPicker.Item aria-label={'red color'} value={'red'} />,
      onChange,
    });

    await driver.selectByIndex(0);

    await eventually(() => expect(onChange).toBeCalled);
  });

  it('should call onChange callback (select by color)', async () => {
    const onChange = jest.fn();
    const color = 'red';
    const driver = bootstrap({
      children: <ColorPicker.Item aria-label={'red color'} value={color} />,
      onChange,
    });

    await driver.selectByColor(color);

    await eventually(() => expect(onChange).toBeCalled);
  });

  it('should support ColorPickerItemDriver (disabled, isCrossedOut)', async () => {
    const onChange = jest.fn();
    const driver = bootstrap({
      children: (
        <>
          <ColorPicker.Item aria-label={'red color'} value="red" isCrossedOut />
          <ColorPicker.Item aria-label={'red color'} value="blue" disabled />
        </>
      ),
      onChange,
    });

    const itemDriverFirst = driver.getItemAt(0);
    const itemDriverSecond = driver.getItemAt(1);

    expect(await itemDriverFirst.isCrossedOut()).toBe(true);
    expect(await itemDriverFirst.isDisabled()).toBe(false);

    expect(await itemDriverSecond.isCrossedOut()).toBe(false);
    expect(await itemDriverSecond.isDisabled()).toBe(true);
  });

  it('should support ColorPickerItemDriver (tooltip)', async () => {
    const onChange = jest.fn();
    const color = 'red';
    const driver = bootstrap({
      children: (
        <ColorPicker.Item
          aria-label={'red color'}
          value={color}
          tooltip="Hello"
          tooltipDataHook={'tooltip-data-hook'}
        />
      ),
      onChange,
    });

    const itemDriverFirst = driver.getItemAt(0);

    expect(await itemDriverFirst.getTooltipText()).toBe('ArrowTop.svgHello');
  });

  it('should  getItemAt', async () => {
    const onChange = jest.fn();

    const driver = createDriver(
      <ColorPicker onChange={onChange}>
        <ColorPicker.Item aria-label={'red color'} value="red" tooltip="Red" />
        <ColorPicker.Item
          aria-label={'blue color'}
          value="blue"
          tooltip="Blue"
        />
      </ColorPicker>,
    );

    const itemDriverFirst = driver.getItemAt(0);
    const itemDriverSecond = driver.getItemAt(1);

    expect(await itemDriverFirst.getTooltipText()).toBe('ArrowTop.svgRed');
    expect(await itemDriverSecond.getTooltipText()).toBe('ArrowTop.svgBlue');
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <ColorPicker onChange={() => {}} />,
          colorPickerTestkitFactory,
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
          <ColorPicker onChange={() => {}} />,
          enzymeColorPickerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
