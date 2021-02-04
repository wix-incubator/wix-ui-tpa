import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { BOX_SELECTION_DATA_HOOKS } from './dataHooks';

export interface BoxSelectionDriver extends BaseUniDriver {
  isChecked(id: string): Promise<boolean>;
  isDisabled(id: string): Promise<boolean>;
  isUnavailable(id: string): Promise<boolean>;
  getOptionsCount(): Promise<number>;
}
export const boxSelectionDriverFactory = (
  base: UniDriver,
): BoxSelectionDriver => {
  const boxOptionDataHook = `[data-hook=${BOX_SELECTION_DATA_HOOKS.BOX_SELECTION_OPTION}]`;
  const getOptionById = async (id: string) => base.$(`[id="${id}"]`);
  const getOptionByDataId = async (id: string) => base.$(`[data-id="${id}"]`);
  return {
    ...baseUniDriverFactory(base),
    async getOptionsCount() {
      return base.$$(boxOptionDataHook).count();
    },
    async isChecked(id: string) {
      const option = await getOptionById(id);
      const isChecked = await option._prop('checked');
      return isChecked;
    },
    async isDisabled(id: string) {
      const option = await getOptionById(id);
      const isDisabled = await option._prop('disabled');
      return isDisabled;
    },
    async isUnavailable(id: string) {
      const option = await getOptionByDataId(id);
      const isUnavailable = (await option.attr('data-unavailable')) === 'true';
      return isUnavailable;
    },
  };
};
