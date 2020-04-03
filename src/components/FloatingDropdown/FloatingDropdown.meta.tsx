import { FloatingDropdown } from '.';
import Registry from '@ui-autotools/registry';

const FloatingDropdownMetadata = Registry.getComponentMetadata(
  FloatingDropdown,
);
FloatingDropdownMetadata.nonReactStrictModeCompliant = true;

FloatingDropdownMetadata.addSim({
  title: 'render',
  props: {
    options: [
      { id: '1', value: 'Most recent', isSelectable: true },
      { id: '2', value: 'Most viewed', isSelectable: true },
      { id: '3', value: 'Most liked', isSelectable: true },
      { id: '4', value: 'Most comments', isSelectable: true },
      {
        id: '5',
        value: 'Most recent posts in the whole galaxy',
        isSelectable: true,
      },
    ],
    label: 'Sort by:',
    placeholder: 'Most recent',
  },
});
