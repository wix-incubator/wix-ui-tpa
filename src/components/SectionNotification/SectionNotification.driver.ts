import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { UniDriverList } from '@unidriver/core';
import { hasDataAttr } from '../../test/utils';
import { SECTION_NOTIFICATION_DATA_HOOKS } from './dataHooks';

export interface SectionNotificationDriver extends BaseUniDriver {
  isError(): Promise<boolean>;
  isAlert(): Promise<boolean>;
  hasIcon(): Promise<boolean>;
  hasButtons(): Promise<boolean>;
  getText(): Promise<string>;
  getIconContainer(): UniDriver;
  getButtons(): UniDriverList;
}

const getIconContainer = (base) =>
  base.$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.icon}"]`);
const getTextContainer = (base) =>
  base.$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.text}"]`);
const getButtons = (base) =>
  base.$$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.button}"]`);

export const sectionNotificationDriverFactory = (
  base: UniDriver,
): SectionNotificationDriver => {
  return {
    ...baseUniDriverFactory(base),
    isError: () => hasDataAttr(base, 'error', 'true'),
    isAlert: () => hasDataAttr(base, 'alert', 'true'),
    hasIcon: () => getIconContainer(base).exists(),
    hasButtons: async () => (await getButtons(base).count()) > -1,
    getText: () => getTextContainer(base).text(),
    getIconContainer: () => getIconContainer(base),
    getButtons: () => getButtons(base),
  };
};
