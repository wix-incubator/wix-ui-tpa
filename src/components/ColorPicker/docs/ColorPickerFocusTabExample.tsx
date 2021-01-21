import * as React from 'react';
import { classes } from './ColorPickerFocusTabExample.st.css';
import { COLORS } from './ColorPickerExtendedExample';
import {
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
} from 'wix-ui-core/src/components/radio-button/RadioButton';
import { ColorPicker } from '../ColorPicker';
import classNames from 'classnames';

interface State {
  selectedColor: string | number;
}

interface Props {
  className: string;
}

class ColorPickerStateful extends React.Component<Props, State> {
  state = { selectedColor: null };

  handleSelection = ({
    value,
  }: RadioButtonChangeEvent | RadioButtonClickEvent) => {
    this.setState({ selectedColor: value });
  };

  render = () => (
    <ColorPicker
      {...this.props}
      className={classNames(classes.colorPicker, this.props.className)}
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

export class ColorPickerFocusTabExample extends React.Component {
  render = () => (
    <div className={classes.wrapper}>
      <ColorPickerStateful className={classes.withFocusHighlight} />
      <ColorPickerStateful className={classes.withFocusHighlight} />
    </div>
  );
}
