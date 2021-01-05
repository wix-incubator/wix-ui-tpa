import * as React from 'react';
import Registry from '@ui-autotools/registry';

import { Text } from '../Text';
import { Popover, PopoverProps } from '.';

const PopoverContent = () => [
  <Popover.Element key="element">
    <Text>This is the Popover.Element</Text>
  </Popover.Element>,
  <Popover.Content key="content">
    <div>This is the Popover.Content</div>
  </Popover.Content>,
];

const PopoverMetadata = Registry.getComponentMetadata(Popover);
PopoverMetadata.nonReactStrictModeCompliant = true;

PopoverMetadata.addSim({
  title: 'render',
  props: {
    children: PopoverContent,
    placement: 'top',
  } as PopoverProps,
});
