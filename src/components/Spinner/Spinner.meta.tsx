import { Spinner } from '.';
import Registry from '@ui-autotools/registry';

const SpinnerMetadata = Registry.getComponentMetadata(Spinner);
SpinnerMetadata.nonReactStrictModeCompliant = true;

SpinnerMetadata.addSim({
  title: 'render',
  props: {},
});
