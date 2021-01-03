export const importExample = `import { RadioButton } from 'wix-ui-tpa/RadioButton';`;

export const uncheckedExample = `
<RadioButton value={'Unchecked'} withFocusRing onChange={val => console.log(val)} label="Unchecked"/>
`;

export const checkedExample = `
<RadioButton value={'Checked'} withFocusRing onChange={val => console.log(val)} checked label="Checked" />
`;

export const disabledExample = `
<RadioButton value={'Disabled'} onChange={val => console.log(val)} disabled label="Disabled" />
`;

export const boxExample = `
<RadioButton value={'Checked'} withFocusRing checked theme='box' onChange={val => console.log(val)}  label="Checked" />
`;

export const boxExampleDisabled = `
<RadioButton suffix="$" disabled theme='box' onChange={val => console.log(val)}  label="Checked" />
`;

export const boxExampleDisabledChecked = `
<RadioButton value={'Checked'} suffix="$" disabled checked theme='box' onChange={val => console.log(val)}  label="Checked" />
`;

export const suffixExample = `
<RadioButton value={'Checked'} withFocusRing suffix="$" checked  onChange={val => console.log(val)}  label="Checked" />
`;

export const errorExample = `
<RadioButton value={'Checked'} withFocusRing error checked theme='box' onChange={val => console.log(val)}  label="Checked" />
`;

export const withChildrenExample = `
<RadioButton value={'Checked'} withFocusRing checked onChange={val => console.log(val)} ><span>With Children</span></RadioButton>
`;
