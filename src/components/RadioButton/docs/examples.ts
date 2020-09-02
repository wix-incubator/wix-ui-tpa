export const importExample = `import { RadioButton } from 'wix-ui-tpa/RadioButton';`;

export const uncheckedExample = `
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="Unchecked"/>
`;

export const checkedExample = `
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="Checked" />
`;

export const disabledExample = `
<RadioButton value={'Disabled'} onChange={val => console.log(val)} disabled label="Disabled" />
`;

export const boxExample = `
<RadioButton value={'Checked'}  checked theme='box' onChange={val => console.log(val)}  label="Checked" />
`;
export const boxExampleDisabled = `
<RadioButton value={'Checked'} suffix="$" disabled checked theme='box' onChange={val => console.log(val)}  label="Checked" />
`;

export const suffixExample = `
<RadioButton value={'Checked'} suffix="$" checked  onChange={val => console.log(val)}  label="Checked" />
`;

export const errorExample = `
<RadioButton value={'Checked'} error checked theme='box' onChange={val => console.log(val)}  label="Checked" />
`;
