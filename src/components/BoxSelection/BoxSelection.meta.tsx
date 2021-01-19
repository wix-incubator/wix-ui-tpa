import * as React from 'react';
import { BoxSelection, BoxSelectionProps } from '.';
import Registry from '@ui-autotools/registry';
import { BoxSize } from './BoxSelection';

const BoxSelectionMetadata = Registry.getComponentMetadata(BoxSelection);
BoxSelectionMetadata.nonReactStrictModeCompliant = true;

BoxSelectionMetadata.addSim({
  title: 'render 1 item',
  props: {
    name: 'hours',
    'aria-label': 'Item-1',
    children: <BoxSelection.Option id="1">Item-1</BoxSelection.Option>,
  } as BoxSelectionProps,
});

BoxSelectionMetadata.addSim({
  title: 'render disabled and checked',
  props: {
    name: 'hours',
    size: BoxSize.small,
    children: (
      <>
        <BoxSelection.Option id="1" disabled>
          Item-1
        </BoxSelection.Option>
        <BoxSelection.Option id="2" checked>
          Item-2
        </BoxSelection.Option>
      </>
    ),
  } as BoxSelectionProps,
});

BoxSelectionMetadata.addSim({
  title: 'render unavailable and checked',
  props: {
    name: 'hours',
    size: BoxSize.small,
    children: (
      <>
        <BoxSelection.Option id="1" unavailable>
          Item-1
        </BoxSelection.Option>
        <BoxSelection.Option id="2" checked>
          Item-2
        </BoxSelection.Option>
      </>
    ),
  } as BoxSelectionProps,
});
