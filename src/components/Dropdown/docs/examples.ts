export const importExample = `import { Dropdown } from 'wix-ui-tpa/Dropdown';`;

const baseOptions = new Array(5).fill(null).map((el, i) => {
  const option = {
    id: i,
    value: `Input Text ${i + 1}`,
    isDisabled: i > 2,
    isSelectable: true,
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

export const withSubtitlesExample = `
    <Dropdown placeholder="Placeholder Text" options={${optionsWithSubtitle}} />
`;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  <Dropdown />
</ExampleWithContextProps>
`;
