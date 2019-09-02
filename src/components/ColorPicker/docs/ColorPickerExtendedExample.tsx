import * as React from 'react';
import extendedStyles from './ColorPickerExtendedExample.st.css';
import { ColorPicker } from '../ColorPicker';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';

interface State {
  selectedColor: string;
}

export const COLORS = [
  {
    value: 'purple',
    ariaLabel: 'purple color',
  },
  {
    value: 'green',
    ariaLabel: 'green color',
  },
  {
    value: 'red',
    ariaLabel: 'red color',
  },
  {
    value: 'navy',
    ariaLabel: 'navy color',
  },
  {
    value: 'cyan',
    ariaLabel: 'cyan color',
  },
  {
    value: 'yellow',
    ariaLabel: 'yellow color',
  },
];

export class ColorPickerExtendedExample extends React.Component<{}, State> {
  state = { selectedColor: null };

  handleSelection = ({
    value,
  }: RadioButtonChangeEvent | RadioButtonClickEvent) => {
    this.setState({ selectedColor: value });
  };

  render = () => (
    <ColorPicker
      {...this.props}
      {...extendedStyles('root', {}, this.props)}
      onChange={this.handleSelection}
    >
      {COLORS.map((color, index) => (
        <ColorPicker.Item
          key={index}
          value={color.value}
          aria-label={color.ariaLabel}
          checked={this.state.selectedColor === color.value}
        />
      ))}
    </ColorPicker>
  );
}
