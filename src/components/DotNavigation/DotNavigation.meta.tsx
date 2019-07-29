import { DotNavigation } from '.';
import Registry from '@ui-autotools/registry';

const DotNavigationMetadata = Registry.getComponentMetadata(DotNavigation);
DotNavigationMetadata.nonReactStrictModeCompliant = true;

DotNavigationMetadata.addSim({
  title: 'render',
  props: {},
});
