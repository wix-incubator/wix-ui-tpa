import * as React from 'react';
import extendedStyles from './ColorPickerExtendedExample.st.css';
import { ColorPicker } from '../ColorPicker';

interface State {
  selectedColor: string;
}

const COLORS = [
  {
    color: 'purple',
    ariaLabel: 'purple color',
  },
  {
    color: 'green',
    ariaLabel: 'green color',
  },
  {
    color: 'red',
    ariaLabel: 'red color',
  },
  {
    color: 'navy',
    ariaLabel: 'navy color',
  },
  {
    color: 'cyan',
    ariaLabel: 'cyan color',
  },
  {
    color: 'yellow',
    ariaLabel: 'yellow color',
  },
];

export class ColorPickerExtendedExample extends React.Component<{}, State> {
  state = { selectedColor: null };

  handleSelection = (color: string) => {
    this.setState({ selectedColor: color });
  };

  render = () => (
    <ColorPicker {...this.props} {...extendedStyles('root', {}, this.props)}>
      {COLORS.map((color, index) => (
        <ColorPicker.Item
          key={index}
          onClick={this.handleSelection}
          color={color.color}
          ariaLabel={color.ariaLabel}
          checked={this.state.selectedColor === color.color}
        />
      ))}
    </ColorPicker>
  );
}
