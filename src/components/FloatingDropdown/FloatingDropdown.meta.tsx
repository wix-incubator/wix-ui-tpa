import { FloatingDropdown } from '.';
import Registry from '@ui-autotools/registry';

const FloatingDropdownMetadata = Registry.getComponentMetadata(
  FloatingDropdown,
);
FloatingDropdownMetadata.nonReactStrictModeCompliant = true;

FloatingDropdownMetadata.addSim({
  title: 'render',
  props: {
    buttonText: 'Click me!',
  },
});
