import * as React from 'react';
import { st, classes } from './ColorPickerItem.st.css';
import { RadioButton } from 'wix-ui-core/radio-button';
import { RadioButtonProps } from 'wix-ui-core/dist/src/components/radio-button/RadioButton';
import { colorPickerItemDataHook } from '../dataHooks';

export interface ColorPickerItemProps extends RadioButtonProps {
  className?: string;
  key?: number;
}

interface ColorPickerItemState {
  focused: boolean;
}

/** ColorPickerItem */
export class ColorPickerItem extends React.Component<
  ColorPickerItemProps,
  ColorPickerItemState
> {
  static displayName = colorPickerItemDataHook;
  state = { focused: false };

  getRadio = ({ value }: ColorPickerItemProps) => (
    <div className={classes.radioOuter}>
      <div className={classes.radioInner} style={{ backgroundColor: value }} />
    </div>
  );

  render = () => {
    const { value, checked, onChange, className } = this.props;
    const { focused } = this.state;
    return (
      <RadioButton
        className={st(classes.root, { checked, focused }, className)}
        aria-label={this.props['aria-label']}
        data-hook={ColorPickerItem.displayName}
        checked={checked}
        checkedIcon={this.getRadio({
          ...this.props,
          checked: true,
        })}
        value={value}
        uncheckedIcon={this.getRadio({
          ...this.props,
          checked: false,
        })}
        onChange={onChange}
        onHover={() => this.setState({ focused: true })}
        onIconBlur={() => this.setState({ focused: false })}
      />
    );
  };
}
