import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Counter.st.css';

export interface CounterDriver extends BaseUniDriver {
  isCounterComponentDisabled(): Promise<boolean>;
  isInputComponentDisabled(): Promise<boolean>;
  hasCounterComponentError(): Promise<boolean>;
  isMinusButtonDisabled(): Promise<boolean>;
  isPlusButtonDisabled(): Promise<boolean>;
  isInputValueEqualTo(val: number): Promise<boolean>;
  pressMinus(): Promise<void>;
  pressPlus(): Promise<void>;
  getCounterAriaLabel(): Promise<string>;
  getCounterAriaLabellledby(): Promise<string>;
}

export const counterDriverFactory = (base: UniDriver): CounterDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  const getPlusButton = () => base.$$(`.${style.btn}`).get(0);
  const getMinusButton = () => base.$$(`.${style.btn}`).get(1);
  const getInput = () => base.$(`.${style.root} input`);
  const getAriaLabel = (label: string) => base.attr(`aria-${label}`);
  return {
    ...baseUniDriverFactory(base),
    isCounterComponentDisabled: async () =>
      stylableUtil.hasStyleState(base, 'disabled'),
    isInputComponentDisabled: async () => !!getInput()._prop('disabled'),
    hasCounterComponentError: async () =>
      stylableUtil.hasStyleState(base, 'error'),
    isMinusButtonDisabled: async () => !!getMinusButton()._prop('disabled'),
    isPlusButtonDisabled: async () => !!getPlusButton()._prop('disabled'),
    isInputValueEqualTo: async (val: number) =>
      (await getInput().value()) === val.toString(),
    pressMinus: async () => getMinusButton().click(),
    pressPlus: async () => getPlusButton().click(),
    getCounterAriaLabel: async () => getAriaLabel('label'),
    getCounterAriaLabellledby: async () => getAriaLabel('labelledby'),
  };
};
