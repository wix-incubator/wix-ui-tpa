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
  pressLeftArrowKey(): Promise<any>;
  pressRightArrowKey(): Promise<any>;
  getSelectedDay(): Promise<string>;
  getMonthDropdownDriver(): Promise<UniDriver>;
  getYearDropdownDriver(): Promise<UniDriver>;
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
    /**
     * Click on the Nth dropdown option in the year dropdown
     * @param n - the index of the year in the list
     */
    clickOnNthYear: async (n: number) => WSRCalendarDriver.clickOnNthYear(n),
    /**
     * Click on the prev month button
     */
    clickOnPrevMonthButton: async () =>
      WSRCalendarDriver.clickOnPrevMonthButton(),
    /**
     * Click on the next month button
     */
    clickOnNextMonthButton: async () =>
      WSRCalendarDriver.clickOnNextMonthButton(),
    /**
     * Check whether the year dropdown exist
     */
    isYearDropdownExists: async () => WSRCalendarDriver.isYearDropdownExists(),
    /**
     * Check whether the year caption exist
     */
    isYearCaptionExists: async () => WSRCalendarDriver.isYearCaptionExists(),
    /**
     * Check whether the month dropdown exist
     */
    isMonthDropdownExists: async () =>
      WSRCalendarDriver.isMonthDropdownExists(),
    /**
     * Check whether the month caption exist
     */
    isMonthCaptionExists: async () => WSRCalendarDriver.isMonthCaptionExists(),
    /**
     * Get the month caption text
     */
    getMonthCaption: async () => WSRCalendarDriver.getMonthCaption(),
    /**
     * Get the label of the selected month dropdown option
     */
    getMonthDropdownLabel: async () =>
      WSRCalendarDriver.getMonthDropdownLabel(),
    /**
     * Get the label of the selected year dropdown option
     */
    getSelectedYear: async () => WSRCalendarDriver.getSelectedYear(),
    /**
     *  Returns the text of the focused day or `null` if there is no focused day
     */
    getFocusedDay: async () => WSRCalendarDriver.getFocusedDay(),
    /**
     * Simulating pressing on the left arrow key in the keyboard
     */
    pressLeftArrowKey: async () => WSRCalendarDriver.pressLeftArrow(),
    /**
     * Simulating pressing on the right arrow key in the keyboard
     */
    pressRightArrowKey: async () => WSRCalendarDriver.pressRightArrow(),
    /**
     * Get the selected day
     */
    getSelectedDay: async () => WSRCalendarDriver.getSelectedDay(),
    /**
     * Get the month dropdown driver
     */
    getMonthDropdownDriver: async () =>
      WSRCalendarDriver.getMonthDropdownDriver(),
    /**
     * Get the year dropdown driver
     */
    getYearDropdownDriver: async () =>
      WSRCalendarDriver.getYearDropdownDriver(),
  };
};
