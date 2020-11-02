import { inputDriverFactory as coreDriver } from 'wix-ui-core/dist/src/components/input/Input.driver';
import { EMPTY, ERROR, ERROR_MESSAGE, SUCCESS, THEME } from './dataKeys';
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
    return !!element.querySelector('[data-hook="successIcon"]');
  }

  function isFocused() {
    return inputDriver.getInput() === document.activeElement;
  }

  function isClearButtonExist() {
    return !!element.querySelector('[data-hook="clear-button"]');
  }

  function isCustomSuffixExist() {
    return !!element.querySelector('[data-hook="custom-suffix"]');
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
      const clearButton = element.querySelector('[data-hook="clear-button"]');
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
