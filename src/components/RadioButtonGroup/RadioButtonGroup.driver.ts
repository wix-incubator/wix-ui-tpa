import {
    BaseUniDriver,
    baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import {UniDriver} from 'wix-ui-test-utils/unidriver';
import {radioButtonDriverFactory} from '../RadioButton/RadioButton.driver';

export interface RadioButtonGroupDriver extends BaseUniDriver {
    isEmpty(): Promise<boolean>;

    getItemsCountByItemDatahook(datahook: string): any
}

export const radioButtonGroupDriverFactory = (
    base: UniDriver,
): RadioButtonGroupDriver => {
    const radiobuttonDriver = radioButtonDriverFactory(base);
    return {
        ...baseUniDriverFactory(base),
        async isEmpty() {
            return radiobuttonDriver.exists();
        },
        async getItemsCountByItemDatahook(datahook: string) {
            return base.$$(`[data-hook=${datahook}]`).count()
        }
    };
};
