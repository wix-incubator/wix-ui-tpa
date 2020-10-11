export const simpleOptions = new Array(6).fill(null).map((el, i) => {
  return i === 4
    ? { divider: true }
    : {
        id: `${i}`,
        value: `Input Text ${i + 1}`,
        isSelectable: i < 3,
      };
});

export const optionsWithSubtitle = simpleOptions.map((option, i) => ({
  ...option,
  subtitle:
    i === 0
      ? `The longest subtitle has 2 lines. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      : `Subtitle Text ${i}`,
}));

export const optionsWithIcon = `[{
    id: '1',
    value: 'Share 01',
    isSelectable: true,
    icon: ${`<svg width="24px" height="24px">
        <path d="M14.2736842,7.11666667 C12.1894737,7.21111111 3.66315789,8.62777778 3,21 C4.51578947,17.2222222 8.11578947,14.6722222 12.1894737,14.6722222 C12.8526316,14.6722222 13.5157895,14.7666667 14.2736842,14.8611111 L14.2736842,18.1666667 L21,11.0833333 L14.2736842,4 L14.2736842,7.11666667 Z"/>
    </svg>`}
}, {
    id: '2',
    value: 'Share 02',
    isSelectable: true,
    icon: ${`<svg width="24px" height="24px">
        <path d="M14.2736842,7.11666667 C12.1894737,7.21111111 3.66315789,8.62777778 3,21 C4.51578947,17.2222222 8.11578947,14.6722222 12.1894737,14.6722222 C12.8526316,14.6722222 13.5157895,14.7666667 14.2736842,14.8611111 L14.2736842,18.1666667 L21,11.0833333 L14.2736842,4 L14.2736842,7.11666667 Z"/>
    </svg>`}
}]`;

export const optionsWithIconAndSubtitles = `[{
    id: '1',
    value: 'Share 01',
    subtitle: 'Subtitle Share 01',
    isSelectable: true,
    icon: ${`<svg width="24px" height="24px">
        <path d="M14.2736842,7.11666667 C12.1894737,7.21111111 3.66315789,8.62777778 3,21 C4.51578947,17.2222222 8.11578947,14.6722222 12.1894737,14.6722222 C12.8526316,14.6722222 13.5157895,14.7666667 14.2736842,14.8611111 L14.2736842,18.1666667 L21,11.0833333 L14.2736842,4 L14.2736842,7.11666667 Z"/>
    </svg>`}
}, {
    id: '2',
    value: 'Share 02',
    subtitle: 'Subtitle Share 02',
    isSelectable: true,
    icon: ${`<svg width="24px" height="24px">
        <path d="M14.2736842,7.11666667 C12.1894737,7.21111111 3.66315789,8.62777778 3,21 C4.51578947,17.2222222 8.11578947,14.6722222 12.1894737,14.6722222 C12.8526316,14.6722222 13.5157895,14.7666667 14.2736842,14.8611111 L14.2736842,18.1666667 L21,11.0833333 L14.2736842,4 L14.2736842,7.11666667 Z"/>
    </svg>`}
}]`;

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
  id: `${i}`,
  value: `0${i + 1}`,
  isSelectable: true,
}));
