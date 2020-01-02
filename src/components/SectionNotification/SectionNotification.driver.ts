import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { StylableUnidriverUtil, UniDriver } from 'wix-ui-test-utils/unidriver';
import { SECTION_NOTIFICATION_DATA_HOOKS } from './dataHooks';
import style from './SectionNotification.st.css';

export interface SectionNotificationDriver extends BaseUniDriver {
  isError(): Promise<boolean>;
  isMobile(): Promise<boolean>;
  isRTL(): Promise<boolean>;
  hasIcon(): Promise<boolean>;
  hasControls(): Promise<boolean>;
  getText(): Promise<string>;
  getIconContainer(): UniDriver;
  getControlsContainer(): UniDriver;
}

export const sectionNotificationDriverFactory = (
  base: UniDriver,
): SectionNotificationDriver => {
  const stylableUtil = new StylableUnidriverUtil(style);

  const getIconContainer = () =>
    base.$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.iconWrapper}"]`);
  const getTextContainer = () =>
    base.$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.textWrapper}"]`);
  const getControlsContainer = () =>
    base.$(`[data-hook="${SECTION_NOTIFICATION_DATA_HOOKS.controlsWrapper}"]`);

  return {
    ...baseUniDriverFactory(base),
    isError: () => stylableUtil.hasStyleState(base, 'error'),
    isMobile: () => stylableUtil.hasStyleState(base, 'mobile'),
    isRTL: () => stylableUtil.hasStyleState(base, 'rtl'),
    hasIcon: () => getIconContainer().exists(),
    hasControls: () => getControlsContainer().exists(),
    getText: () => getTextContainer().text(),
    getIconContainer: () => getIconContainer(),
    getControlsContainer: () => getControlsContainer(),
  };
};
