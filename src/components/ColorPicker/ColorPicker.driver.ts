import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './ColorPicker.st.css';

export interface ColorPickerDriver extends BaseUniDriver {}

export const colorPickerDriverFactory = (
  base: UniDriver,
): ColorPickerDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
  };
};
