import { ColorPicker } from '.';
import Registry from '@ui-autotools/registry';

const ColorPickerMetadata = Registry.getComponentMetadata(ColorPicker);
ColorPickerMetadata.nonReactStrictModeCompliant = true;

ColorPickerMetadata.addSim({
  title: 'render',
  props: {
    onChange: (e) => {},
  },
});
