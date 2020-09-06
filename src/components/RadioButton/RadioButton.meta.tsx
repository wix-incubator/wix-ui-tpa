import { RadioButton } from '.';
import Registry from '@ui-autotools/registry';

const RadioButtonMetadata = Registry.getComponentMetadata(RadioButton);
RadioButtonMetadata.nonReactStrictModeCompliant = true;

RadioButtonMetadata.addSim({
  title: 'default',
  props: {
    label: 'label',
    value: 'value',
    onChange: () => {},
  },
});

RadioButtonMetadata.addSim({
  title: 'checked',
  props: {
    checked: true,
    label: 'label',
    value: 'value',
    onChange: () => {},
  },
});

RadioButtonMetadata.addSim({
  title: 'disabled',
  props: {
    disabled: true,
    label: 'label',
    value: 'value',
    onChange: () => {},
  },
});
