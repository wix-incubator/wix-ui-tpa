import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { colorPickerItemDataHook } from './dataHooks';

export interface ColorPickerDriver extends BaseUniDriver {
  selectByIndex(index: number): Promise<void>;
  selectByColor(color: string): Promise<void>;
}

export const colorPickerDriverFactory = (
  base: UniDriver,
): ColorPickerDriver => {
  const children = base.$$(`[data-hook="${colorPickerItemDataHook}"]`);
  const childByColor = color => base.$(`[style="background-color: ${color};"]`);

  return {
    ...baseUniDriverFactory(base),
    selectByIndex: async (index: number) => {
      const child = children.get(index);

      await child.click();
    },
    selectByColor: async (color: string) => {
      await childByColor(color).click();
    },
  };
};
