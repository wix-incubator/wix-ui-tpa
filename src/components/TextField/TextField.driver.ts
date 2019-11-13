import { inputDriverFactory as coreDriver } from 'wix-ui-core/dist/src/components/input/Input.driver';
import { EMPTY, ERROR, ERROR_MESSAGE, SUCCESS, THEME } from './dataKeys';
import {
  BaseUniDriver,
  baseUniDriverFactory,
  StylableUnidriverUtil,
  UniDriver,
} from 'wix-ui-test-utils/unidriver';
import style from '../StatesButton/StatesButton.st.css';

export const textFieldDriverFactory = ({ element, eventTrigger }) => {
  const inputDriver = coreDriver({ element, eventTrigger });

  function getDataAttributeValue(attributeName) {
    return inputDriver.getInput().getAttribute(attributeName);
  }

  function getDataAttributeBooleanValue(attributeName) {
    return getDataAttributeValue(attributeName) === 'true';
  }

  function getErrorMessage() {
    return getDataAttributeValue(ERROR_MESSAGE);
  }

  function getThemeValue() {
    return getDataAttributeValue(THEME);
  }

  function isSuccessValue() {
    return getDataAttributeBooleanValue(SUCCESS);
  }

  function isErrorValue() {
    return getDataAttributeBooleanValue(ERROR);
  }

  function isHasEmptyState() {
    return getDataAttributeBooleanValue(EMPTY);
  }

  return {
    ...inputDriver,
    getTheme() {
      return getThemeValue();
    },
    isSuccess() {
      return isSuccessValue();
    },
    isError() {
      return isErrorValue();
    },
    getErrorMessage() {
      return getErrorMessage();
    },
    hasEmptyState() {
      return isHasEmptyState();
    },
    hasErrorMessage() {
      return !!getErrorMessage();
    },

    hover() {
      return eventTrigger.mouseEnter(element);
    },

    focus() {
      return inputDriver.getInput().focus();
    },
  };
};

export interface TextFieldDriver extends BaseUniDriver {
  isSuccessIconExist(): Promise<boolean>;
  isSuccess(): Promise<boolean>;
}

export const textFieldUniDriverFactory = (base: UniDriver): TextFieldDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  return {
    ...baseUniDriverFactory(base),
    isSuccessIconExist: () => base.$('[data-hook="successIcon"]').exists(),
    isSuccess: () => base.attr(SUCCESS).then(result => result === 'true'),
  };
};
