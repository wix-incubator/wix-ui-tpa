import { IconButton, Skins } from '.';
import Registry from '@ui-autotools/registry';
import * as React from 'react';
import { ChevronLeft } from '../Icons/components/ChevronLeft';

const IconButtonMetadata = Registry.getComponentMetadata(IconButton);
IconButtonMetadata.nonReactStrictModeCompliant = true;

IconButtonMetadata.addSim({
  title: 'render',
  props: {
    icon: <ChevronLeft />,
    ['aria-label']: 'share',
    skin: Skins.Line,
  },
});
