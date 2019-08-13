export const importExample = `import { ActionsMenu } from 'wix-ui-tpa/ActionsMenu';`;

export const example = `
<ActionsMenu>
    <ActionsMenu.Item onClick={onClick} content="item 1"  />
    <ActionsMenu.Item onClick={onClick} content="item 2" subtitle="Subtitle" />
    <ActionsMenu.Divider  />
    <ActionsMenu.Item onClick={onClick} content="item 3" prefixIcon={<ShareIcon />} subtitle="Subtitle" />
    <ActionsMenu.Item onClick={onClick} content="item 4" prefixIcon={<ShareIcon />} subtitle="Subtitle" disabled={true} />
    <ActionsMenu.Item onClick={onClick} content="item 5" prefixIcon={<ShareIcon />}  />
</ActionsMenu>
`;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  <ActionsMenu>
    <ActionsMenu.Item onClick={onClick} content="item 1"  />
    <ActionsMenu.Item onClick={onClick} content="item 2" subtitle="Subtitle" />
  </ActionsMenu>
</ExampleWithContextProps>
`;
