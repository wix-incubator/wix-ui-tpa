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
