import { FloatingDropdownProps } from './FloatingDropdown';

export function getFloatingDropdownTestProps(
  overrides: Partial<FloatingDropdownProps> = {},
): FloatingDropdownProps {
  return {
    options: [
      { id: '1', value: 'Most recent', isSelectable: true },
      { id: '2', value: 'Most viewed', isSelectable: true },
      { id: '3', value: 'Most liked', isSelectable: true },
      { divider: true },
      { id: '4', value: 'Most comments', isSelectable: true },
      {
        id: '5',
        value: 'Most recent posts in the whole galaxy',
        isSelectable: true,
      },
    ],
    label: 'Sort by:',
    placeholder: 'Most recent',

    ...overrides,
  };
}
