export const importExample = `import { ActionsMenu } from 'wix-ui-tpa/ActionsMenu';`;

const onClick = () => console.log('clicked');
export const ActionsMenuExample = `
<ActionsMenu>
    <ActionsMenu.Item onClick={${onClick}} content="item 1"  />
    <ActionsMenu.Item onClick={${onClick}} content="item 2" subtitle="Subtitle" />
    <ActionsMenu.Divider  />
    <ActionsMenu.Item onClick={${onClick}} content="item 3" subtitle="Subtitle" />
    <ActionsMenu.Item onClick={${onClick}} content="item 4" subtitle="Subtitle" disabled={true} />
    <ActionsMenu.Item onClick={${onClick}} content="item 5"  />
</ActionsMenu>
`;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  <ActionsMenu>
    <ActionsMenu.Item onClick={${onClick}} content="item 1"  />
    <ActionsMenu.Item onClick={${onClick}} content="item 2" subtitle="Subtitle" />
  </ActionsMenu>
</ExampleWithContextProps>
`;
