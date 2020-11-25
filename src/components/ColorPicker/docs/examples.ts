export const importExample = `import { ColorPicker } from 'wix-ui-tpa/ColorPicker';`;

export const basicExample = `
    class ColorPickerExample extends React.Component {
      state = {
        selectedColorName: 'white',
      };
    
      _onChange = ({ value }) => this.setState({ selectedColorName: value })
    
      render() {
          const { selectedColorName } = this.state;
          
          const PRODUCT_COLORS = {
            1: 'white',
            2: 'lightblue',
            3: '#ffcc66',
            4: '#00cc66',
          };
                
          return (
            <ColorPicker
              aria-label="Color Picker"
              onChange={this._onChange}
            >
              <ColorPicker.Item
                key={1}
                aria-label="white color"
                value={PRODUCT_COLORS[1]}
                checked={selectedColorName === PRODUCT_COLORS[1]}
              />
              <ColorPicker.Item
                key={2}
                aria-label="light blue color"
                value={PRODUCT_COLORS[2]}
                checked={selectedColorName === PRODUCT_COLORS[2]}
              />
              <ColorPicker.Item
                key={3}
                aria-label="orange color"
                value={PRODUCT_COLORS[3]}
                checked={selectedColorName === PRODUCT_COLORS[3]}
              />
              <ColorPicker.Item
                key={4}
                aria-label="green color"
                value={PRODUCT_COLORS[4]}
                checked={selectedColorName === PRODUCT_COLORS[4]}
              />
            </ColorPicker>
          );
      }
}`;

export const crossedOutExample = `
    <ColorPicker onChange={({value}) => console.log(value)}>
      <ColorPicker.Item aria-label="first color" value="red" isCrossedOut />
      <ColorPicker.Item aria-label="second color" value="green" />
      <ColorPicker.Item aria-label="third color" value="yellow" isCrossedOut />
      <ColorPicker.Item aria-label="fourth color" value="brown" />
      <ColorPicker.Item aria-label="fifth color" value="#2318FF" />
      <ColorPicker.Item aria-label="sixth color" value="white" />
    </ColorPicker>
`;
