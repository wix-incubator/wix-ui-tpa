export const importExample = `import { ColorPicker } from 'wix-ui-tpa/ColorPicker';`;

export const example = `
<ColorPicker>
  <ColorPicker.Item ariaLabel="first color" color="red" onClick={(color) => {console.log(color)}}/>
  <ColorPicker.Item ariaLabel="second color" color="green" onClick={(color) => {console.log(color)}}/>
  <ColorPicker.Item ariaLabel="third color" color="yellow" onClick={(color) => {console.log(color)}}/>
  <ColorPicker.Item ariaLabel="fourth color" color="brown" onClick={(color) => {console.log(color)}}/>
  <ColorPicker.Item ariaLabel="fifth color" color="#2318FF" onClick={(color) => {console.log(color)}}/>
  <ColorPicker.Item ariaLabel="sixth color" onClick={(color) => {console.log(color)}}/>
</ColorPicker>
`;
