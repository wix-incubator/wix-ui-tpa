export const importExample = `import { CheckboxGroup } from 'wix-ui-tpa/CheckboxGroup';`;

export const example = `
<CheckboxGroup>
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3️⃣" />
</CheckboxGroup>
`;

export const exampleWithLabel = `
<CheckboxGroup label="Well, hello. I'm checkbox group.">
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3" />
</CheckboxGroup>
`;

export const exampleWithLongText = `
<CheckboxGroup label="Well, hello. I'm checkbox group.">
    <Checkbox name="group1" onChange={val => console.log(val)} label="This is option with a very long amount of text in it and much more text" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="This is option with a very long amount of text in it and much more text" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="This is option with a very long amount of text in it and much more text" />
</CheckboxGroup>
`;

export const exampleWithLabelDisabled = `
<CheckboxGroup label="Well, hello. I'm checkbox group." disabled>
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3" />
</CheckboxGroup>
`;

export const exampleWithError = `
<CheckboxGroup label="Well, hello. I'm checkbox group." error>
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3" />
</CheckboxGroup>
`;

export const exampleWithErrorText = `
<CheckboxGroup label="Well, hello. I'm checkbox group." error errorText="I'm an error. Fix me!">
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3" />
</CheckboxGroup>
`;

export const exampleHorizontal = `
<CheckboxGroup label="Well, hello. I'm checkbox group." layout="horizontal">
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox" />
</CheckboxGroup>
`;

export const exampleHorizontalWithErrorText = `
<CheckboxGroup label="Well, hello. I'm checkbox group." layout="horizontal" error errorText="I'm error text.">
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox" />
</CheckboxGroup>
`;

export const exampleHorizontalWithLongText = `
<div style={{width: '1000px'}}>
    <CheckboxGroup label="Well, hello. I'm checkbox group." layout="horizontal">
        <Checkbox name="group1" onChange={val => console.log(val)} label="an option with a lot of text and a lot of text and too much text" />
        <Checkbox name="group1" onChange={val => console.log(val)} label="an option with a lot of text and a lot of text and too much text" />
        <Checkbox name="group1" onChange={val => console.log(val)} label="an option with a lot of text and a lot of text and too much text" />
        <Checkbox name="group1" onChange={val => console.log(val)} label="an option with a lot of text and a lot of text and too much text" />
    </CheckboxGroup>
</div>
`;

export const exampleHorizontalWithLongTextMinWidth = `
<CheckboxGroup label="Well, hello. I'm checkbox group." layout="horizontal">
    <Checkbox name="group1" onChange={val => console.log(val)} label="It's amazing!" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="It's OK." />
    <Checkbox name="group1" onChange={val => console.log(val)} label="I did not like it." />
</CheckboxGroup>
`;
