import { ThemedDatePicker, ThemedDatePickerProps } from '.';
import Registry from '@ui-autotools/registry';

const ThemedDatePickerMetadata = Registry.getComponentMetadata(ThemedDatePicker);
ThemedDatePickerMetadata.nonReactStrictModeCompliant = true;

ThemedDatePickerMetadata.addSim({
  title: 'render',
  props: {
  } as ThemedDatePickerProps,
});
