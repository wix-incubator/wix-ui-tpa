import { Picker } from '.';
import Registry from '@ui-autotools/registry';

const PickerMetadata = Registry.getComponentMetadata(Picker);
PickerMetadata.nonReactStrictModeCompliant = true;

PickerMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!'
  },
});
