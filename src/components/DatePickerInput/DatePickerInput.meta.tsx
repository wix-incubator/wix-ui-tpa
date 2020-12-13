import { DatePickerInput, DatePickerInputProps } from '.';
import Registry from '@ui-autotools/registry';

const DatePickerInputMetadata = Registry.getComponentMetadata(DatePickerInput);
DatePickerInputMetadata.nonReactStrictModeCompliant = true;

DatePickerInputMetadata.addSim({
  title: 'render',
  props: {
    value: new Date(),
    onChange: () => {},
    onClose: () => {},
    placeholderText: 'Select Date',
    disabled: false,
    dateFormat: 'LL/dd/yyyy',
    locale: 'en',
    'aria-label': 'Date Picker',
    clearButtonAriaLabel: 'Clear Button',
    dateInputAriaLabel: 'Date Input',
  } as DatePickerInputProps,
});

DatePickerInputMetadata.addSim({
  title: 'disabled',
  props: {
    value: new Date(),
    onChange: () => {},
    disabled: true,
    'aria-label': 'Date Picker',
    dateInputAriaLabel: 'Date Input',
  } as DatePickerInputProps,
});

DatePickerInputMetadata.addSim({
  title: 'has error',
  props: {
    value: new Date(),
    onChange: () => {},
    hasError: true,
    errorMessage: 'Error Message',
    'aria-label': 'Date Picker',
    clearButtonAriaLabel: 'Clear Button',
    dateInputAriaLabel: 'Date Input',
  } as DatePickerInputProps,
});

DatePickerInputMetadata.addSim({
  title: 'excludePastDates',
  props: {
    value: new Date(),
    onChange: () => {},
    excludePastDates: true,
    'aria-label': 'Date Picker',
    dateInputAriaLabel: 'Date Input',
    clearButtonAriaLabel: 'Clear Button',
  } as DatePickerInputProps,
});

DatePickerInputMetadata.addSim({
  title: 'Month and year dropdowns',
  props: {
    value: new Date(),
    onChange: () => {},
    showMonthDropdown: true,
    showYearDropdown: true,
    'aria-label': 'Date Picker',
    dateInputAriaLabel: 'Date Input',
    clearButtonAriaLabel: 'Clear Button',
  } as DatePickerInputProps,
});
