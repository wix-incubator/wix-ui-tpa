import { DatePicker, DatePickerProps } from '.';
import Registry from '@ui-autotools/registry';

const DatePickerMetadata = Registry.getComponentMetadata(DatePicker);
DatePickerMetadata.nonReactStrictModeCompliant = true;

DatePickerMetadata.addSim({
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
  } as DatePickerProps,
});

DatePickerMetadata.addSim({
  title: 'disabled',
  props: {
    value: new Date(),
    onChange: () => {},
    disabled: true,
    'aria-label': 'Date Picker',
  } as DatePickerProps,
});

DatePickerMetadata.addSim({
  title: 'has error',
  props: {
    value: new Date(),
    onChange: () => {},
    hasError: true,
    errorMessage: 'Error Message',
    'aria-label': 'Date Picker',
    clearButtonAriaLabel: 'Clear Button',
  } as DatePickerProps,
});

DatePickerMetadata.addSim({
  title: 'excludePastDates',
  props: {
    value: new Date(),
    onChange: () => {},
    excludePastDates: true,
    'aria-label': 'Date Picker',
    clearButtonAriaLabel: 'Clear Button',
  } as DatePickerProps,
});

DatePickerMetadata.addSim({
  title: 'Month and year dropdowns',
  props: {
    value: new Date(),
    onChange: () => {},
    showMonthDropdown: true,
    showYearDropdown: true,
    'aria-label': 'Date Picker',
    clearButtonAriaLabel: 'Clear Button',
  } as DatePickerProps,
});
