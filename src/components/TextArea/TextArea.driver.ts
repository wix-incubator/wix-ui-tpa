import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { TEXT_AREA_DATA_HOOK, TEXT_AREA_ERROR_DATA_HOOK } from './dataHooks';
import {
  TEXT_AREA_DISABLED,
  TEXT_AREA_ERROR,
  TEXT_AREA_SUCCESS,
  TEXT_AREA_THEME,
} from './dataKeys';
import { TextAreaTheme } from './TextAreaEnums';

export interface TextAreaDriver extends BaseUniDriver {
  value(): Promise<string>;
  error(): Promise<boolean>;
  success(): Promise<boolean>;
  disabled(): Promise<boolean>;
  errorIcon(): Promise<boolean>;
  placeholder(): Promise<string>;
  theme(): Promise<TextAreaTheme>;
  typeText(text: string): Promise<any>;
  getTextareaElement(): Promise<HTMLElement>;
}

function textArea(base: UniDriver) {
  return base.$(`[data-hook="${TEXT_AREA_DATA_HOOK}"]`);
}

function errorIcon(base: UniDriver) {
  return base.$(`[data-hook="${TEXT_AREA_ERROR_DATA_HOOK}"]`);
}

async function isDisabled(base) {
  const disabled = await base.attr(TEXT_AREA_DISABLED);
  return disabled === 'true';
}

async function isError(base) {
  return (await base.attr(TEXT_AREA_ERROR)) === 'true';
}

async function isSuccess(base) {
  return (await base.attr(TEXT_AREA_SUCCESS)) === 'true';
}

function getTheme(base) {
  return base.attr(TEXT_AREA_THEME);
}

export const textAreaDriverFactory = (base: UniDriver): TextAreaDriver => {
  return {
    ...baseUniDriverFactory(base),
    async value() {
      return textArea(base).value();
    },
    async placeholder() {
      return textArea(base).attr('placeholder');
    },
    async typeText(text: string) {
      return textArea(base).enterValue(text);
    },
    async disabled() {
      return isDisabled(base);
    },
    async theme(): Promise<TextAreaTheme> {
      return getTheme(base) as Promise<TextAreaTheme>;
    },
    async errorIcon() {
      return errorIcon(base).exists();
    },
    async error() {
      return isError(base);
    },
    async success() {
      return isSuccess(base);
    },
    async getTextareaElement() {
      return textArea(base).getNative();
    },
  };
};
