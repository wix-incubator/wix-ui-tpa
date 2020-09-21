import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { colorPickerItemDriverFactory } from './ColorPickerItem.driver';
import { enzymeUniTestkitFactoryCreator } from 'wix-ui-test-utils/enzyme';
import { ColorPickerItem } from './';
import { mount } from 'enzyme';
import { ColorPicker } from '../ColorPicker';

describe('ColorPickerItem', () => {
  const tooltipContent = 'Hello';
  const tooltipInnerContent = `ArrowTop.svg${tooltipContent}`;
  const tooltipDataHook = 'colorPickerItem-tooltip';
  const createDriver = enzymeUniTestkitFactoryCreator(
    colorPickerItemDriverFactory,
  );

  // afterEach(() => {
  //   // this is obviously a "hack".
  //   // this data-hook is taken from the wix-ui-core/Popover implementation:
  //   // https://github.com/wix/wix-ui/blob/master/packages/wix-ui-core/src/components/popover/Popover.uni.driver.ts#L17
  //   // TODO fix TooltipDriver in core, to remove the portal when not needed
  //   const portal =
  //     document && document.querySelector('[data-hook="popover-portal"]');
  //
  //   if (portal) {
  //     portal.remove();
  //   }
  // });

  const bootstrap = (props = {}) => {
    const dataHook = 'compDataHook';
    const compProps = {
      onChange: () => {},
      'data-hook': dataHook,
      tooltipDataHook,
      ...props,
    };
    const wrapper = mount(
      <div>
        <ColorPickerItem {...compProps} />
      </div>,
    );
    return createDriver({ wrapper, dataHook });
  };
  const unMountComponent = element => ReactDOM.unmountComponentAtNode(element);

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  it('should not be disabled by default', async () => {
    const driver = bootstrap();
    expect(await driver.isDisabled()).toBe(false);
  });

  it('should not be crossed out by default', async () => {
    const driver = bootstrap();
    expect(await driver.isCrossedOut()).toBe(false);
  });

  it('should support disabled state', async () => {
    const driver = bootstrap({ disabled: true });
    expect(await driver.isCrossedOut()).toBe(false);
    expect(await driver.isDisabled()).toBe(true);
  });

  it('should support crossed out state', async () => {
    const driver = bootstrap({ isCrossedOut: true });
    expect(await driver.isCrossedOut()).toBe(true);
    expect(await driver.isDisabled()).toBe(false);
  });

  it('should support crossed out and disabled state simultaneously', async () => {
    const driver = bootstrap({ isCrossedOut: true, disabled: true });
    expect(await driver.isCrossedOut()).toBe(true);
    expect(await driver.isDisabled()).toBe(true);
  });

  it('should display tooltip', async () => {
    const driver = bootstrap({ tooltip: tooltipContent });
    expect(await driver.getTooltipText()).toBe(tooltipInnerContent);
    // unMountComponent(await driver.element());
  });

  it('should disabled tooltip disabled state', async () => {
    const driver = bootstrap({ tooltip: tooltipContent, disabled: true });
    expect(await driver.getTooltipText()).toBe(tooltipInnerContent);
    // unMountComponent(await driver.element());
  });

  it('should disabled tooltip crossed out state state', async () => {
    const driver = bootstrap({ tooltip: tooltipContent, isCrossedOut: true });
    expect(await driver.getTooltipText()).toBe(tooltipInnerContent);
    // unMountComponent(await driver.element());
  });
});
