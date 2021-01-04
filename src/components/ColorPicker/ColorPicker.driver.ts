import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { colorPickerItemDataHook } from './dataHooks';
import {
  ColorPickerItemDriver,
  colorPickerItemDriverFactory,
} from './ColorPickerItem/ColorPickerItem.driver';

export interface ColorPickerDriver extends BaseUniDriver {
  selectByIndex(index: number): Promise<void>;
  selectByColor(color: string): Promise<void>;
  getItemAt(index: number): ColorPickerItemDriver;
}

export const colorPickerDriverFactory = (
  base: UniDriver,
  body: UniDriver,
): ColorPickerDriver => {
  const children = base.$$(`[data-hook="${colorPickerItemDataHook}"]`);
  const childByColor = (color) =>
    base.$(`[style="background-color: ${color};"]`);

  return {
    ...baseUniDriverFactory(base),
    selectByIndex: async (index: number) => {
      const child = children.get(index);

      await child.click();
    },
    selectByColor: async (color: string) => {
      await childByColor(color).click();
    },
    getItemAt: (index: number): ColorPickerItemDriver => {
      const child = children.get(index);
      return colorPickerItemDriverFactory(child, body);
    },
  };
};
