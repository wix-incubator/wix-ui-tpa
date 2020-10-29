import * as React from 'react';
import { TPAComponentProps } from '../../types';

import WSRDatePicker from 'wix-style-react/dist/src/DatePicker';
import { PopoverCommonProps } from 'wix-style-react/dist/src/common/PropTypes/PopoverCommon';
import { TextField } from '../TextField/TextField';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';

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
  /** Custom date format, can be either:
   `string` of tokens (see [`date-fns V2` docs](https://date-fns.org/v2.15.0/docs/format) for list of supported tokens)
   `function` of signature `Date -> String`
   */
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
  /** Error status */
  hasError;
  /** The error status message to display when hovering the status icon. */
  errorMessage;
}

interface DefaultProps {
  placeholderText: string;
  disabled: boolean;
  dateFormat: string;
  locale: LanguageType | { distanceInWords?: {}; format?: {} };
  excludePastDates: boolean;
  filterDate(date: Date): boolean;
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  hasError: boolean;
  errorMessage: string;
}

/** The Date pickers presents a calendar and allows a user to select a specific date. */
export class DatePicker extends React.Component<DatePickerProps> {
  static displayName = 'DatePicker';
  static defaultProps: DefaultProps = {
    placeholderText: '',
    disabled: false,
    dateFormat: 'LL/dd/yyyy',
    locale: 'en',
    excludePastDates: false,
    filterDate: () => true,
    firstDayOfWeek: 1,
    hasError: false,
    errorMessage: '',
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
      hasError,
      errorMessage,
    } = this.props;

    const customInput = (
      <TextField
        data-hook="date-input"
        prefix={
          <div className={classes.calendarIconWrapper}>
            <Heart />
          </div>
        }
        disabled={disabled}
        error={hasError}
        errorMessage={errorMessage}
      />
    );

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
          customInput={customInput}
          width="300px"
        />
      </div>
    );
  }
}
