import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './CheckboxGroup.st.css';

export interface CheckboxGroupDriver extends BaseUniDriver {

}

export const checkboxGroupDriverFactory = (base: UniDriver): CheckboxGroupDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
  };
};
