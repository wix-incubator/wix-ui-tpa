import { Picker } from '.';
import Registry from '@ui-autotools/registry';

const PickerMetadata = Registry.getComponentMetadata(Picker);
PickerMetadata.nonReactStrictModeCompliant = true;

PickerMetadata.addSim({
  title: 'render',
  props: {
    value: 'october 2020',
    previousClickHandler: () => {},
    nextClickHandler: () => {},
  },
});

PickerMetadata.addSim({
  title: 'render',
  props: {
    value: 'october 2020',
    previousClickHandler: () => {},
    nextClickHandler: () => {},
    arrowsSize: '24px',
  },
});
