import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { DATA_HOOKS } from './constants';

// @ts-ignore
import { calendarUniDriverFactory as WSRCalendarUniDriverFactory } from 'wix-style-react/dist/src/Calendar/Calendar.uni.driver';

export interface DatePickerDriver extends BaseUniDriver {
  getCurrentMonthWithYear(): Promise<string>;
  getNthWeekDayName(n: number): Promise<string>;
  clickOnNthDay(n: number): Promise<any>;
  clickDay(date: Date): Promise<any>;
  isDayActive(date: Date): Promise<boolean>;
  clickOnYearDropdown(): Promise<any>;
  clickOnMonthDropdown(): Promise<any>;
  clickOnNthYear(n: number): Promise<any>;
  clickOnPrevMonthButton(): Promise<any>;
  clickOnNextMonthButton(): Promise<any>;
  isYearDropdownExists(): Promise<boolean>;
  isYearCaptionExists(): Promise<boolean>;
  isMonthDropdownExists(): Promise<boolean>;
  isMonthCaptionExists(): Promise<boolean>;
  getMonthCaption(): Promise<string>;
  getMonthDropdownLabel(): Promise<string>;
  getSelectedYear(): Promise<string>;
  getFocusedDay(): Promise<string | null>;
  pressLeftArrow(): Promise<any>;
  pressRightArrow(): Promise<any>;
  getSelectedDay(): Promise<string>;
  triggerKeyDown(): Promise<any>;
  getMonthDropdownDriver(): Promise<UniDriver>;
  getYearDropdownDriver(): Promise<UniDriver>;
  getSelectedDays(): Promise<number>;
}

export const datePickerDriverFactory = (
  base: UniDriver,
  body: UniDriver,
): DatePickerDriver => {
  const wsrCalendarNode = base.$(`[data-hook="${DATA_HOOKS.WSR_CALENDAR}"]`);
  const WSRCalendarDriver = WSRCalendarUniDriverFactory(wsrCalendarNode, body);

  return {
    ...baseUniDriverFactory(base),
    /**
     * Get the month and years labels of the current displayed month in the following format `{Month} {year}`
     */
    getCurrentMonthWithYear: async () =>
      WSRCalendarDriver.getCurrentMonthWithYear(),
    /**
     * Get the the day name label of a specific date
     * @param n - the day index
     */
    getNthWeekDayName: async (n: number) =>
      WSRCalendarDriver.getNthWeekDayName(n),
    /**
     * Click on the Nth day in the current displayed month
     * @param n - the day index
     */
    clickOnNthDay: async (n: number) => WSRCalendarDriver.clickOnNthDay(n),
    /**
     * Click on a given day
     * @param date - a date to select
     */
    clickDay: async (date: Date) => WSRCalendarDriver.clickDay(date),
    /**
     * Check if the given day is active
     * @param date - a date
     */
    isDayActive: async (date: Date) => WSRCalendarDriver.isDayActive(date),
    /**
     * Click on the year dropdown
     */
    clickOnYearDropdown: async () => WSRCalendarDriver.clickOnYearDropdown(),
    /**
     * Click on the month dropdown
     */
    clickOnMonthDropdown: async () => WSRCalendarDriver.clickOnMonthDropdown(),
    clickOnNthYear: async (n: number) => WSRCalendarDriver.clickOnNthYear(n),
    clickOnPrevMonthButton: async () =>
      WSRCalendarDriver.clickOnPrevMonthButton(),
    clickOnNextMonthButton: async () =>
      WSRCalendarDriver.clickOnNextMonthButton(),
    isYearDropdownExists: async () => WSRCalendarDriver.isYearDropdownExists(),
    isYearCaptionExists: async () => WSRCalendarDriver.isYearCaptionExists(),
    isMonthDropdownExists: async () =>
      WSRCalendarDriver.isMonthDropdownExists(),
    isMonthCaptionExists: async () => WSRCalendarDriver.isMonthCaptionExists(),
    getMonthCaption: async () => WSRCalendarDriver.getMonthCaption(),
    getMonthDropdownLabel: async () =>
      WSRCalendarDriver.getMonthDropdownLabel(),
    getSelectedYear: async () => WSRCalendarDriver.getSelectedYear(),
    getFocusedDay: async () => WSRCalendarDriver.getFocusedDay(),
    pressLeftArrow: async () => WSRCalendarDriver.pressLeftArrow(),
    pressRightArrow: async () => WSRCalendarDriver.pressRightArrow(),
    getSelectedDay: async () => WSRCalendarDriver.getSelectedDay(),
    triggerKeyDown: async () => WSRCalendarDriver.triggerKeyDown(),
    getMonthDropdownDriver: async () =>
      WSRCalendarDriver.getMonthDropdownDriver(),
    getYearDropdownDriver: async () =>
      WSRCalendarDriver.getYearDropdownDriver(),
    getSelectedDays: async () => WSRCalendarDriver.getSelectedDays(),
  };
};
