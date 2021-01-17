import { BoxSelection, BoxSelectionProps } from '.';
import Registry from '@ui-autotools/registry';

const BoxSelectionMetadata = Registry.getComponentMetadata(BoxSelection);
BoxSelectionMetadata.nonReactStrictModeCompliant = true;

BoxSelectionMetadata.addSim({
  title: 'render',
  props: {
    name: 'hours',
  } as BoxSelectionProps,
});
