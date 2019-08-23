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
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3️⃣" />
</CheckboxGroup>
`;

export const exampleWithLabelDisabled = `
<CheckboxGroup label="Well, hello. I'm checkbox group." disabled>
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3️⃣" />
</CheckboxGroup>
`;

export const exampleWithError = `
<CheckboxGroup label="Well, hello. I'm checkbox group." error>
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3️⃣" />
</CheckboxGroup>
`;

export const exampleWithErrorText = `
<CheckboxGroup label="Well, hello. I'm checkbox group." error errorText="I'm error. Fix me!">
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3️⃣" />
</CheckboxGroup>
`;

export const exampleHorizontal = `
<CheckboxGroup label="Well, hello. I'm checkbox group." layout="horizontal">
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 1️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 2️⃣" />
    <Checkbox name="group1" onChange={val => console.log(val)} label="Checkbox 3️⃣" />
</CheckboxGroup>
`;
