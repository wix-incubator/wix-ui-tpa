export const importExample = `import { RadioButtonGroup } from 'wix-ui-tpa/RadioButtonGroup';`;

export const example = `
<RadioButtonGroup  name="areAreRadio" value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>
`;

export const disabledExample = `
<RadioButtonGroup  name="areAreRadio" disabled value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>
`;

export const boxExample = `
<RadioButtonGroup  name="areAreRadio" theme="box" value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
</RadioButtonGroup>
`;

export const boxExampleWithSpacing = `
<RadioButtonGroup  name="areAreRadio" withSpacing  theme="box" value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>

`;
export const horizontalLayput = `
<RadioButtonGroup   name="areAreRadio" layout="horizontal"  value={'Checked'}>
<RadioButton value={'Unchecked'} onChange={val => console.log(val)} label="option1"/>
<RadioButton value={'Checked'} onChange={val => console.log(val)} checked label="option2" />
</RadioButtonGroup>
`;
