import { FloatingDropdown } from '.';
import Registry from '@ui-autotools/registry';

import { getFloatingDropdownTestProps } from './test-props';

const FloatingDropdownMetadata = Registry.getComponentMetadata(
  FloatingDropdown,
);
FloatingDropdownMetadata.nonReactStrictModeCompliant = true;
FloatingDropdownMetadata.nonA11yCompliant = true;

FloatingDropdownMetadata.addSim({
  title: 'render',
  props: getFloatingDropdownTestProps(),
});
