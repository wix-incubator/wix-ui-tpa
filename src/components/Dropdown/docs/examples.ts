export const importExample = `import { Dropdown } from 'wix-ui-tpa/Dropdown';`;

export const example = `
    <Dropdown placeholder="Placeholder Text" />
`;

export const disabledExample = `
    <Dropdown placeholder="Placeholder Text" disabled/>
`;

export const errorExample = `
    <Dropdown placeholder="Placeholder Text" error={true} />
`;

export const errorWithMessageExample = `
    <Dropdown placeholder="Placeholder Text" error={true} errorMessage="The coupon code is not valid"/>
`;

export const withLabelExample = `
    <Dropdown placeholder="Placeholder Text" label="Label Text"/>
`;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  <Dropdown />
</ExampleWithContextProps>
`;
