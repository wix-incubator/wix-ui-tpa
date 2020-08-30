export const importExample = `import { RadioButtonGroup } from 'wix-ui-tpa/RadioButtonGroup';`;

export const example = `
<RadioButtonGroup  value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>
`;

export const disabledExample = `
<RadioButtonGroup  disabled value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>
`;

export const boxExample = `
<RadioButtonGroup  theme="box" value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>
`;

export const boxExampleWithSpacing = `
<RadioButtonGroup withSpacing  theme="box" value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>

`;
export const horizontalLayput = `
<RadioButtonGroup layout={'horizontal'}  value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>
`;
