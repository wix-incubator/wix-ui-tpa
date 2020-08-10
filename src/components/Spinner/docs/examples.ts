export const importExample = `import { Spinner } from 'wix-ui-tpa/Spinner';`;

export const regular = `
<div style={{ height: "140px", position: "relative" }}><Spinner width={100} /></div>
`;

export const slim = `
<ExampleWithContextProps mobile={true}>
  <div style={{ height: "140px", position: "relative" }}><Spinner type="slim" width={100} /></div>
</ExampleWithContextProps>
`;
