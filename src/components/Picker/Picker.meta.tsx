import { Picker } from '.';
import Registry from '@ui-autotools/registry';

const PickerMetadata = Registry.getComponentMetadata(Picker);
PickerMetadata.nonReactStrictModeCompliant = true;

PickerMetadata.addSim({
  title: 'render',
  props: {
    value: 'october 2020',
    onPrev: () => {},
    onNext: () => {},
  },
});

PickerMetadata.addSim({
  title: 'disable next',
  props: {
    value: 'october 2020',
    onPrev: () => {},
    onNext: () => {},
    nextDisabled: true,
  },
});

PickerMetadata.addSim({
  title: 'disable prev',
  props: {
    value: 'october 2020',
    onPrev: () => {},
    onNext: () => {},
    prevDisabled: true,
  },
});
