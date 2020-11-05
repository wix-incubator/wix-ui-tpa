import { inputDriverFactory as coreDriver } from 'wix-ui-core/dist/src/components/input/Input.driver';
import {
  EMPTY,
  ERROR,
  ERROR_MESSAGE,
  SUCCESS,
  THEME,
  DATA_HOOKS,
} from './dataKeys';
import { Simulate } from 'react-dom/test-utils';

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

  function isSuccessIconExist() {
    return !!element.querySelector(`[data-hook="${DATA_HOOKS.SUCCESS_ICON}"]`);
  }

  function isFocused() {
    return inputDriver.getInput() === document.activeElement;
  }

  function isClearButtonExist() {
    return !!element.querySelector(`[data-hook="${DATA_HOOKS.CLEAR_BUTTON}"]`);
  }

  function isCustomSuffixExist() {
    return !!element.querySelector(`[data-hook="${DATA_HOOKS.CUSTOM_SUFFIX}"]`);
  }

  return {
    ...inputDriver,
    getTheme() {
      return getThemeValue();
    },
    isSuccess() {
      return isSuccessValue();
    },
    isSuccessIconExist() {
      return isSuccessIconExist();
    },
    isError() {
      return isErrorValue();
    },
    hasErrorMessage() {
      return !!getErrorMessage();
    },
    getErrorMessage() {
      return getErrorMessage();
    },
    isFocused() {
      return isFocused();
    },
    hasEmptyState() {
      return isHasEmptyState();
    },
    hasClearButton() {
      return isClearButtonExist();
    },
    clickOnClearButton() {
      const clearButton = element.querySelector(
        `[data-hook="${DATA_HOOKS.CLEAR_BUTTON}"]`,
      );
      Simulate.click(clearButton);
    },
    hasCustomSuffix() {
      return isCustomSuffixExist();
    },

    hover() {
      return eventTrigger.mouseEnter(element);
    },

    focus() {
      return inputDriver.getInput().focus();
    },
  };
};
