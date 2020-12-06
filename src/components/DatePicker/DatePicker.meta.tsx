import { DatePicker, DatePickerProps } from '.';
import Registry from '@ui-autotools/registry';

const DatePickerMetadata = Registry.getComponentMetadata(DatePicker);
DatePickerMetadata.nonReactStrictModeCompliant = true;

DatePickerMetadata.addSim({
  title: 'render',
  props: {

  } as DatePickerProps,
});
