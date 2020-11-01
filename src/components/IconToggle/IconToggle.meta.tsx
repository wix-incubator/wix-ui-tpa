import * as React from 'react';
import { IconToggle } from '.';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import Registry from '@ui-autotools/registry';

const IconToggleMetadata = Registry.getComponentMetadata(IconToggle);
IconToggleMetadata.nonReactStrictModeCompliant = true;

IconToggleMetadata.addSim({
  title: 'with label',
  props: {
    icon: <Heart />,
    label: 'Heart',
  },
});

IconToggleMetadata.addSim({
  title: 'checked',
  props: {
    icon: <Heart />,
    label: 'Heart',
    checked: true,
  },
});

IconToggleMetadata.addSim({
  title: 'disabled',
  props: {
    icon: <Heart />,
    label: 'Heart',
    disabled: true,
  },
});

IconToggleMetadata.addSim({
  title: 'without label',
  props: {
    icon: <Heart />,
    'aria-label': 'Heart',
  },
});
