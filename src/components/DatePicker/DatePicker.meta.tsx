import { DatePicker, DatePickerProps } from '.';
import Registry from '@ui-autotools/registry';

const DatePickerMetadata = Registry.getComponentMetadata(DatePicker);
DatePickerMetadata.nonReactStrictModeCompliant = true;

DatePickerMetadata.addSim({
  title: 'render',
  props: {
    value: new Date(),
    onChange: () => {},
    placeholderText: 'Select Date',
    locale: 'en',
    'aria-label': 'Date Picker',
  } as DatePickerProps,
});


DatePickerMetadata.addSim({
  title: 'excludePastDates',
  props: {
    value: new Date(),
    onChange: () => {},
    excludePastDates: true,
    'aria-label': 'Date Picker',
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
  } as DatePickerProps,
});
