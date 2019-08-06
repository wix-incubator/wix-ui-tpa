export const importExample = `import { ColorPicker } from 'wix-ui-tpa/ColorPicker';`;

export const example = `
<ColorPicker onChange={({value}) => console.log(value)}>
  <ColorPicker.Item aria-label="first color" value="red" />
  <ColorPicker.Item aria-label="second color" value="green" />
  <ColorPicker.Item aria-label="third color" value="yellow" />
  <ColorPicker.Item aria-label="fourth color" value="brown" />
  <ColorPicker.Item aria-label="fifth color" value="#2318FF" />
  <ColorPicker.Item aria-label="sixth color" value="white" />
</ColorPicker>
`;
