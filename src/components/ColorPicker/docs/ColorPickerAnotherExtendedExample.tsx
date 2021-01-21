import * as React from 'react';
import { classes } from './ColorPickerAnotherExtendedExample.st.css';
import { ColorPicker } from '../ColorPicker';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';
import { COLORS } from './ColorPickerExtendedExample';

interface State {
  selectedColor: string | number;
}

export class ColorPickerAnotherExtendedExample extends React.Component<
  {},
  State
> {
  state = { selectedColor: null };

  handleSelection = ({
    value,
  }: RadioButtonChangeEvent | RadioButtonClickEvent) => {
    this.setState({ selectedColor: value });
  };

  render = () => (
    <ColorPicker
      {...this.props}
      className={classes.root}
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
