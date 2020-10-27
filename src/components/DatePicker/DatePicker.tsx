import * as React from 'react';
import { TPAComponentProps } from '../../types';

import WSRDatePicker from 'wix-style-react/dist/src/DatePicker';
import { PopoverCommonProps } from 'wix-style-react/dist/src/common/PropTypes/PopoverCommon';

import { st, classes } from './DatePicker.st.css';
import { DATA_HOOKS } from './constants';

export type LanguageType =
  | 'en'
  | 'es'
  | 'pt'
  | 'fr'
  | 'de'
  | 'pl'
  | 'it'
  | 'ru'
  | 'ja'
  | 'ko'
  | 'tr'
  | 'sv'
  | 'no'
  | 'nl'
  | 'da'
  | 'zh'
  | 'th'
  | 'cs';

export interface DatePickerProps extends TPAComponentProps {
  /** The selected date */
  value: Date;
  /** Callback function called with a Date or a Range whenever the user selects a day in the calendar */
  onChange(selectedDays: string | Date): void;
  /** A Callback function which is called whenever the user presses escape or clicks outside of the element or a date is selected and `shouldCloseOnSelect` is set */
  onClose?(event: React.MouseEvent<HTMLButtonElement>): void;
  /** placeholder of the Input */
  placeholderText?: string;
  /** Is the DatePicker disabled */
  disabled?: boolean;
  /** */
  dateFormat?: string | ((date: Date) => void);
  /** DatePicker instance locale */
  locale?: LanguageType | { distanceInWords?: {}; format?: {} };
  /** When true, past dates would be unselectable */
  excludePastDates?: boolean;
  /**
   * Determines selectable dates
   *  * `param` {Date} `date` - a date to check
   *  * `return` {boolean} - true if `date` should be selectable, false otherwise
   */
  filterDate?(date: Date): boolean;
  /** First day of the week, allowing only from 0 to 6 (Sunday to Saturday) */
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Sets the popover props. The default placement value depends on the rtl prop - would be 'top-start' when rtl=false and 'top-end' in case of rtl=ture */
  popoverProps?: PopoverCommonProps;
}

interface DefaultProps {
  placeholderText: string;
  disabled: boolean;
  dateFormat: string;
  locale: string;
  excludePastDates: boolean;
  filterDate(date: Date): boolean;
  firstDayOfWeek: string;
}

interface State {}

/** The Date pickers presents a calendar and allows a user to select a specific date. */
export class DatePicker extends React.Component<DatePickerProps, State> {
  static displayName = 'DatePicker';
  static defaultProps: DefaultProps = {
    placeholderText: '',
    disabled: false,
    dateFormat: 'LL/dd/yyyy',
    locale: 'en',
    excludePastDates: false,
    filterDate: () => true,
    firstDayOfWeek: '1',
  };

  state = {};

  render() {
    const {
      className,
      value,
      onChange,
      onClose,
      placeholderText,
      disabled,
      dateFormat,
      locale,
      excludePastDates,
      filterDate,
      firstDayOfWeek,
      popoverProps,
    } = this.props;

    return (
      <div
        className={st(classes.root, className)}
        data-hook={this.props['data-hook']}
      >
        <WSRDatePicker
          dataHook={DATA_HOOKS.WSR_DATE_PICKER}
          value={value}
          onChange={onChange}
          onClose={onClose}
          placeholderText={placeholderText}
          disabled={disabled}
          dateFormatV2={dateFormat}
          locale={locale}
          excludePastDates={excludePastDates}
          filterDate={filterDate}
          firstDayOfWeek={firstDayOfWeek}
          popoverProps={popoverProps}
          selectionMode="day"
          shouldCloseOnSelect
          initialOpen={false}
          numOfMonths={1}
        />
      </div>
    );
  }
}
