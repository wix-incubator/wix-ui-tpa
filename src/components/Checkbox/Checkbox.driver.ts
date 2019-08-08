import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './Checkbox.st.css';

export interface CheckboxDriver extends BaseUniDriver {}

export const checkboxDriverFactory = (base: UniDriver): CheckboxDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
  };
};
