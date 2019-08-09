export const importExample = `import { Checkbox } from 'wix-ui-tpa/Checkbox';`;

export const example = `
<Checkbox onChange={val => console.log(val)} label="Amazing" />
`;

export const exampleWithChecked = `
<Checkbox onChange={val => console.log(val)} checked label="Clicked 🥰" />
`;

export const exampleWithError = `
<Checkbox onChange={val => console.log(val)} error label="Remove this error 😞" />
`;

export const exampleWithDisabled = `
<Checkbox onChange={val => console.log(val)} disabled label="I'm disabled 😶" />
`;

export const exampleWithIndeterminate = `
<Checkbox onChange={val => console.log(val)} indeterminate label="What should I do 🧐?" />
`;
