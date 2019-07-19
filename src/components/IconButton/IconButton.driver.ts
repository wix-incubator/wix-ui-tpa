import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import style from './IconButton.st.css';

export interface IconButtonDriver extends BaseUniDriver {}

export const iconButtonDriverFactory = (base: UniDriver): IconButtonDriver => {
  return {
    ...baseUniDriverFactory(base),
  };
};
