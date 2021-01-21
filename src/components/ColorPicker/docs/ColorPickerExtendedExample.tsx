import * as React from 'react';
import { classes } from './ColorPickerExtendedExample.st.css';
import { ColorPicker } from '../ColorPicker';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';

interface State {
  selectedColor: string | number;
}

export const COLORS = [
  {
    value: 'purple',
    ariaLabel: 'purple color',
    tooltip: 'Hey',
  },
  {
    value: 'green',
    ariaLabel: 'green color',
    tooltip: 'Hello',
  },
  {
    value: 'red',
    ariaLabel: 'red color',
    isCrossedOut: true,
    tooltip: 'Hi',
  },
  {
    value: 'navy',
    ariaLabel: 'navy color',
    disabled: true,
  },
  {
    value: 'cyan',
    ariaLabel: 'cyan color',
    isCrossedOut: true,
    disabled: true,
  },
  {
    value: 'yellow',
    ariaLabel: 'yellow color',
    isCrossedOut: true,
    disabled: true,
    tooltip: 'Hello',
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
      className={classes.root}
      onChange={this.handleSelection}
    >
      {COLORS.map((color, index) => (
        <ColorPicker.Item
          key={index}
          value={color.value}
          aria-label={color.ariaLabel}
          checked={this.state.selectedColor === color.value}
          tooltip={color.tooltip}
        />
      ))}
    </ColorPicker>
  );
}
