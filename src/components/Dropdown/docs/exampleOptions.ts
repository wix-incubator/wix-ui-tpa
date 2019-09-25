export const baseOptions = new Array(5).fill(null).map((el, i) => ({
  id: `${i}`,
  value: `Input Text ${i + 1}`,
  isSelectable: i < 3,
}));

export const optionsWithSubtitle = baseOptions.map((option, i) => ({
  ...option,
  subtitle: `Subtitle Text ${i}`,
}));

export const optionsWithIcon = baseOptions.map((option, i) => ({
  ...option,
  icon: true,
}));

export const optionsWithIconAndSubtitles = baseOptions.map((option, i) => ({
  ...option,
  subtitle: `Subtitle Text ${i}`,
  icon: true,
}));

export const optionsWithSections = [
  {
    id: '0',
    value: 'Site Pages',
    isSectionTitle: true,
    isSelectable: false,
  },
  {
    id: '1',
    value: 'Home',
    isSelectable: true,
  },
  {
    id: '2',
    value: 'Shop',
    isSelectable: true,
  },
  {
    id: '3',
    value: 'About',
    isSelectable: true,
  },
  {
    id: '4',
    value: 'Blog Posts',
    isSectionTitle: true,
    isSelectable: false,
  },
  {
    id: '5',
    value: '11 Proven Ways to Monetize a Website',
    isSelectable: true,
  },
];

export const numberOptions = new Array(6).fill(null).map((el, i) => ({
  id: 'i',
  value: `0${i + 1}`,
  isSelectable: true,
}));
