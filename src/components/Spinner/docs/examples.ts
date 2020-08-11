export const importExample = `import { Spinner } from 'wix-ui-tpa/Spinner';`;

export const regular = `
<Spinner />
`;

export const slim = `
<ExampleWithContextProps mobile={true}>
  <Spinner type="slim" />
</ExampleWithContextProps>
`;

export const centered = `
<div style={{ height: "140px", position: "relative" }}><Spinner width={100} isCentered={true} /></div>
`;
