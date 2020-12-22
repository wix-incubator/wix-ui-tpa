import { DatePicker, DatePickerProps } from '.';
import Registry from '@ui-autotools/registry';

const DatePickerMetadata = Registry.getComponentMetadata(DatePicker);
DatePickerMetadata.nonReactStrictModeCompliant = true;

// todo: Remove it after fixing the issue that the colors that are used in the tests are the wsr colors.
DatePickerMetadata.nonA11yCompliant = true;

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
