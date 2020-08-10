import { Checkbox, CheckboxTheme } from '.';
import Registry from '@ui-autotools/registry';

const CheckboxMetadata = Registry.getComponentMetadata(Checkbox);
CheckboxMetadata.nonReactStrictModeCompliant = true;

CheckboxMetadata.addSim({
  title: 'default',
  props: {
    onChange: () => {},
    label: 'Amazing',
  },
});

CheckboxMetadata.addSim({
  title: 'checked',
  props: {
    checked: true,
    onChange: () => {},
    label: 'Amazing',
  },
});

CheckboxMetadata.addSim({
  title: 'error',
  props: {
    error: true,
    onChange: () => {},
    label: 'Amazing',
  },
});

CheckboxMetadata.addSim({
  title: 'indeterminate',
  props: {
    indeterminate: true,
    onChange: () => {},
    label: 'Amazing',
  },
});

CheckboxMetadata.addSim({
  title: 'box',
  props: {
    theme: CheckboxTheme.Box,
    onChange: () => {},
    label: 'Amazing',
  },
});

CheckboxMetadata.addSim({
  title: 'suffix',
  props: {
    suffix: '$50,000',
    theme: CheckboxTheme.Box,
    onChange: () => {},
    label: 'Amazing',
  },
});
