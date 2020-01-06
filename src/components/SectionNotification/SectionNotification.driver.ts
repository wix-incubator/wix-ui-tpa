import { BaseUniDriver, baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { hasDataAttr, hasMobile } from '../../test/utils';
import { SECTION_NOTIFICATION_DATA_HOOKS } from './dataHooks';

export interface SectionNotificationDriver extends BaseUniDriver {
  isError(): Promise<boolean>;
  isMobile(): Promise<boolean>;
  hasIcon(): Promise<boolean>;
  hasControls(): Promise<boolean>;
  getText(): Promise<string>;
  getIconContainer(): UniDriver;
  getControlsContainer(): UniDriver;
}

const getIconContainer = base =>
  base.$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.iconWrapper}"]`);
const getTextContainer = base =>
  base.$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.textWrapper}"]`);
const getControlsContainer = base =>
  base.$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.controlsWrapper}"]`);

export const sectionNotificationDriverFactory = (
  base: UniDriver,
): SectionNotificationDriver => {
  return {
    ...baseUniDriverFactory(base),
    isError: () => hasDataAttr(base, 'error', 'true'),
    isMobile: () => hasMobile(base),
    hasIcon: () => getIconContainer(base).exists(),
    hasControls: () => getControlsContainer(base).exists(),
    getText: () => getTextContainer(base).text(),
    getIconContainer: () => getIconContainer(base),
    getControlsContainer: () => getControlsContainer(base),
  };
};
