import * as React from 'react';
import { TPAComponentProps } from '../../types';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

import WSRDatePicker from 'wix-style-react/dist/src/DatePicker';
import { AppendTo } from 'wix-ui-core/popover';
import { TextField } from '../TextField/TextField';
import { TextFieldTheme } from '../TextField/TextFieldEnums';
import { ReactComponent as Calendar } from '../../assets/icons/Calendar.svg';

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

export type popoverPlacementType = 'bottom-start' | 'bottom-end';

export interface DatePickerProps extends TPAComponentProps {
  /** The selected date */
  value: Date | string;
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
  /** Displays a selectable monthDropdown */
  showMonthDropdown?: boolean;
  /** Displays a selectable yearDropdown */
  showYearDropdown?: boolean;
  /** Error status */
  hasError?: boolean;
  /** The error status message to display when hovering the status icon. */
  errorMessage?: string;
  /** sets desired width of DatePicker input */
  inputWidth?: number | string;
  /** Sets the input theme possible values: 'line', 'box'*/
  inputTheme?: TextFieldTheme;
  /** The popover placement. Could be 'bottom-starts' or 'bottom-end'. */
  popoverPlacement?: popoverPlacementType;
  /** Element to append the Popover to */
  popoverAppendTo?: AppendTo;
  /** Defines a string value that labels the clear button element. Optional. */
  clearButtonAriaLabel?: string;
  /** Identifies the element that labels the clear button element. Optional. */
  clearButtonAriaLabelledby?: string;
}

interface DefaultProps {
  placeholderText: string;
  disabled: boolean;
  dateFormat: string;
  locale: LanguageType | { distanceInWords?: {}; format?: {} };
  excludePastDates: boolean;
  filterDate(date: Date): boolean;
  firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showMonthDropdown: boolean;
  showYearDropdown: boolean;
  hasError: boolean;
  inputWidth: number | string;
  inputTheme: TextFieldTheme;
}

/** The Date pickers presents a calendar and allows a user to select a specific date. */
export class DatePicker extends React.Component<DatePickerProps> {
  static displayName = 'DatePicker';
  static defaultProps: DefaultProps = {
    placeholderText: 'MM/DD/YY',
    disabled: false,
    dateFormat: 'LL/dd/yyyy',
    locale: 'en',
    excludePastDates: false,
    filterDate: () => true,
    firstDayOfWeek: 1,
    showMonthDropdown: false,
    showYearDropdown: false,
    hasError: false,
    inputWidth: '280px',
    inputTheme: TextFieldTheme.Box,
  };

  WSRDatePickerRef = React.createRef<WSRDatePicker>();

  _onInputClearButtonClicked = () => {
    const { onChange } = this.props;
    onChange('');
    // @ts-ignore
    this.WSRDatePickerRef.current.closeCalendar();
  };

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
      hasError,
      errorMessage,
      showMonthDropdown,
      showYearDropdown,
      inputWidth,
      inputTheme,
      popoverPlacement,
      popoverAppendTo,
    } = this.props;

    const customInput = (
      <TextField
        data-hook="date-input"
        prefix=""
        suffix={<Calendar />}
        disabled={disabled}
        error={hasError}
        errorMessage={errorMessage}
        theme={inputTheme}
        withClearButton
        onClear={this._onInputClearButtonClicked}
        clearButtonAriaLabel
        clearButtonAriaLabelledby
      />
    );

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => (
          <div
            className={st(classes.root, className)}
            data-hook={this.props['data-hook']}
          >
            <WSRDatePicker
              ref={this.WSRDatePickerRef}
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
              showMonthDropdown={showMonthDropdown}
              showYearDropdown={showYearDropdown}
              customInput={customInput}
              width={inputWidth}
              rtl={rtl}
              selectionMode="day"
              shouldCloseOnSelect
              initialOpen={false}
              numOfMonths={1}
              popoverProps={{
                placement: popoverPlacement
                  ? popoverPlacement
                  : rtl
                  ? 'bottom-end'
                  : 'bottom-start',
                appendTo: popoverAppendTo,
                dynamicWidth: popoverAppendTo === 'window' ? true : undefined,
              }}
            />
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
