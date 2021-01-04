export const importExample = `import { Popover } from 'wix-ui-tpa/Popover';`;

export const hover = `
<Popover triggerAction="hover">
  <Popover.Element>
    <TextButton>Link element</TextButton>
  </Popover.Element>
  <Popover.Content>
    <div>Popover content text</div>
  </Popover.Content>
</Popover>
`;

export const click = `
<Popover>
  <Popover.Element>
    <Button>Trigger element</Button>
  </Popover.Element>
  <Popover.Content>
    <div>Popover content text</div>
  </Popover.Content>
</Popover>
`;
