// import * as React from 'react';
// import Registry from '@ui-autotools/registry';
//
// import { Text } from '../Text';
// import { Popover, PopoverProps, TriggerAction } from '.';
//
// const PopoverContent = [
//   <Popover.Element key="element">
//     <Text>This is the Popover.Element</Text>
//   </Popover.Element>,
//   <Popover.Content key="content">
//     <div>This is the Popover.Content</div>
//   </Popover.Content>,
// ];
//
// const PopoverMetadata = Registry.getComponentMetadata(Popover);
// PopoverMetadata.nonReactStrictModeCompliant = true;
// PopoverMetadata.nonHydrationTestCompliant = true;
// PopoverMetadata.nonEventListenerTestCompliant = true;
//
// PopoverMetadata.addSim({
//   title: 'Controlled Popover render',
//   props: {
//     children: PopoverContent,
//     placement: 'top',
//     shown: true,
//     triggerAction: TriggerAction.click,
//   } as PopoverProps,
// });
//
// PopoverMetadata.addSim({
//   title: 'Controlled Tooltip render',
//   props: {
//     children: PopoverContent,
//     placement: 'top',
//     shown: true,
//     triggerAction: TriggerAction.hover,
//   } as PopoverProps,
// });
//
// PopoverMetadata.addSim({
//   title: 'Uncontrolled Tooltip render',
//   props: {
//     children: PopoverContent,
//     placement: 'top',
//     triggerAction: TriggerAction.hover,
//   } as PopoverProps,
// });
