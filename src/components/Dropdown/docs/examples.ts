export const importExample = `import { Dropdown } from 'wix-ui-tpa/Dropdown';`;

const baseOptions = new Array(5).fill(null).map((el, i) => {
  const option = {
    id: i,
    value: `Input Text ${i + 1}`,
    isSelectable: i < 3,
  };
  return option;
});

const options = JSON.stringify(baseOptions);
const optionsWithSubtitle = JSON.stringify(
  baseOptions.map((option, i) => ({
    ...option,
    subtitle: `Subtitle Text ${i}`,
  })),
);

const optionsWithIcon = JSON.stringify(
  baseOptions.map((option, i) => ({
    ...option,
    icon: true,
  })),
);

const optionsWithIconAndSubtitles = JSON.stringify(
  baseOptions.map((option, i) => ({
    ...option,
    subtitle: `Subtitle Text ${i}`,
    icon: true,
  })),
);

const optionsWithSections = JSON.stringify([
  {
    id: 0,
    value: 'Site Pages',
    isSectionTitle: true,
    isSelectable: false,
  },
  {
    id: 1,
    value: 'Home',
    isSelectable: true,
  },
  {
    id: 2,
    value: 'Shop',
    isSelectable: true,
  },
  {
    id: 3,
    value: 'About',
    isSelectable: true,
  },
  {
    id: 4,
    value: 'Blog Posts',
    isSectionTitle: true,
    isSelectable: false,
  },
  {
    id: 5,
    value: '11 Proven Ways to Monetize a Website',
    isSelectable: true,
  },
]);

const numberOptions = JSON.stringify(
  new Array(6).fill(null).map((el, i) => ({
    id: i,
    value: `0${i + 1}`,
    isSelectable: true,
  })),
);

export const example = `
    <Dropdown placeholder="Placeholder Text" options={${options}} />
`;

export const disabledExample = `
    <Dropdown placeholder="Placeholder Text" disabled options={${options}}/>
`;

export const errorExample = `
    <Dropdown placeholder="Placeholder Text" error={true} options={${options}}/>
`;

export const errorWithMessageExample = `
    <Dropdown placeholder="Placeholder Text" error={true} errorMessage="The coupon code is not valid" options={${options}}/>
`;

export const withLabelExample = `
    <Dropdown placeholder="Placeholder Text" label="Label Text" options={${options}}/>
`;

export const sectionTitleExample = `
    <Dropdown placeholder="Placeholder Text" label="Label Text" options={${optionsWithSections}}/>
`;

export const withSubtitlesExample = `
    <Dropdown placeholder="Placeholder Text" options={${optionsWithSubtitle}} />
`;

export const withIconsExample = `
    <Dropdown placeholder="Placeholder Text" options={${optionsWithIcon}} />
`;

export const withIconsAndSubtitlesExample = `
    <Dropdown placeholder="Placeholder Text" options={${optionsWithIconAndSubtitles}} />
`;

export const minWidthExample = `
    <div style={{width: '0px'}}>
        <Dropdown options={${numberOptions}} initialSelectedId={0}/>
    </div>
`;

export const mobileExample = `
    <ExampleWithContextProps mobile={true}>
        <Dropdown />
    </ExampleWithContextProps>
`;
