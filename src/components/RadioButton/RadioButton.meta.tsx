import { RadioButton } from '.';
import Registry from '@ui-autotools/registry';

const RadioButtonMetadata = Registry.getComponentMetadata(RadioButton);
RadioButtonMetadata.nonReactStrictModeCompliant = true;

RadioButtonMetadata.addSim({
  title: 'render',
  props: {
    label: 'label',
    value: 'value',
    onChange: () => {}
  },
});
