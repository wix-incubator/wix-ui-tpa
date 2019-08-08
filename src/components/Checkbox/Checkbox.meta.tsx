import { Checkbox } from '.';
import Registry from '@ui-autotools/registry';

const CheckboxMetadata = Registry.getComponentMetadata(Checkbox);
CheckboxMetadata.nonReactStrictModeCompliant = true;

CheckboxMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});
