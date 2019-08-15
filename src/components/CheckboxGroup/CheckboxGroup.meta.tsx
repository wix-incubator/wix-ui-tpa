import { CheckboxGroup } from '.';
import Registry from '@ui-autotools/registry';

const CheckboxGroupMetadata = Registry.getComponentMetadata(CheckboxGroup);
CheckboxGroupMetadata.nonReactStrictModeCompliant = true;

CheckboxGroupMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!'
  },
});
