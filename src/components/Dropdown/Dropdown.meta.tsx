import { Dropdown } from '.';
import Registry from '@ui-autotools/registry';

const DropdownMetadata = Registry.getComponentMetadata(Dropdown);
DropdownMetadata.nonReactStrictModeCompliant = true;

DropdownMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});
