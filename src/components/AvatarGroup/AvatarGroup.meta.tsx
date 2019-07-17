// The `ui-autotools` tool, doesn’t support importing svg files as react elements.

// import { AvatarGroup } from '.';
// import Registry from '@ui-autotools/registry';
// import { AvatarGroupSize } from './AvatarGroup';

// const AvatarGroupMetadata = Registry.getComponentMetadata(AvatarGroup);
// AvatarGroupMetadata.nonReactStrictModeCompliant = true;

// AvatarGroupMetadata.addSim({
//   title: 'render',
//   props: {
//     items: [],
//   },
// });

// const items = [
//   {},
//   { name: 'anonymous' },
//   { name: 'Eve', src: 'https://randomuser.me/api/portraits/women/87.jpg' },
//   { name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg' },
// ];

// AvatarGroupMetadata.addSim({
//   title: 'render',
//   props: {
//     items: [...items],
//     size: AvatarGroupSize.large,
//   },
// });

// AvatarGroupMetadata.addSim({
//   title: 'render',
//   props: {
//     items: [...items, ...items],
//     size: AvatarGroupSize.small,
//   },
// });

// AvatarGroupMetadata.addSim({
//   title: 'render',
//   props: {
//     items: [...items, ...items, ...items],
//     size: AvatarGroupSize.xSmall,
//   },
// });

// AvatarGroupMetadata.addSim({
//   title: 'render',
//   props: {
//     items: [...items, ...items, ...items],
//     size: AvatarGroupSize.xxSmall,
//     maxAmount: 9,
//   },
// });
