export const importExample = `import { Popover } from 'wix-ui-tpa/Popover';`;

export const uncontrolled = `<Popover>
  <Popover.Element>
    <TextButton>Hover to open</TextButton>
  </Popover.Element>
  <Popover.Content>
    <div>Popover content text</div>
  </Popover.Content>
</Popover>`;

export const controlledClick = `() => {
const [shown, setShown] = React.useState(false);

return (<Popover shown={shown} onClickOutside={() => shown ? setShown(false) : null}>
  <Popover.Element>
    <Button onClick={() => setShown(!shown)}>Click to open</Button>
  </Popover.Element>
  <Popover.Content>
    <div>Popover content text</div>
  </Popover.Content>
</Popover>);
}`;

export const controlledHover = `() => {
const [shown, setShown] = React.useState(false);
const show = () => setShown(true);
const hide = () => setShown(false);

return (<Popover shown={shown}>
  <Popover.Element>
    <TextButton onFocus={show}
                onBlur={hide} 
                onMouseEnter={show} 
                onMouseLeave={hide}>
                Hover to open
    </TextButton>
  </Popover.Element>
  <Popover.Content>
    <div>Popover content text</div>
  </Popover.Content>
</Popover>);
}`;
