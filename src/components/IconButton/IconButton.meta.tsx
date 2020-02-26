import { IconButton, Skins } from '.';
import Registry from '@ui-autotools/registry';
import * as React from 'react';
import { Arrow_Left_Center as ChevronLeft } from '../Icons/components/Arrow_Left_Center';

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
