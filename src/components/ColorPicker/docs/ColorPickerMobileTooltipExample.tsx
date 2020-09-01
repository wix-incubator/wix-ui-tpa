import * as React from 'react';
import { classes } from './ColorPickerExtendedExample.st.css';
import { ColorPicker } from '../ColorPicker';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';

interface State {
  selectedColor: string;
}

export const COLORS = [
  {
    value: 'purple',
    ariaLabel: 'purple color',
    tooltip: 'Tooltip',
  },
  {
    value: 'green',
    ariaLabel: 'green color',
    disabled: true,
    tooltip: 'Tooltip with disabled',
  },
  {
    value: 'red',
    ariaLabel: 'red color',
    disabled: true,
  },
  {
    value: 'navy',
    ariaLabel: 'navy color',
  },
];

export class ColorPickerMobileTooltipExample extends React.Component<
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
    <TPAComponentsProvider value={{ mobile: true }}>
      <ColorPicker
        {...this.props}
        className={classes.root}
        onChange={this.handleSelection}
      >
        {COLORS.map((itemProps, index) => (
          <ColorPicker.Item
            key={index}
            value={itemProps.value}
            aria-label={itemProps.ariaLabel}
            disabled={itemProps.disabled}
            tooltip={itemProps.tooltip}
            checked={this.state.selectedColor === itemProps.value}
          />
        ))}
      </ColorPicker>
    </TPAComponentsProvider>
  );
}
