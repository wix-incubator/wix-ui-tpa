import * as React from 'react';
import { st, classes } from './ColorPickerItem.st.css';
import { RadioButton } from 'wix-ui-core/radio-button';
import { RadioButtonProps } from 'wix-ui-core/dist/src/components/radio-button/RadioButton';
import {
  colorPickerItemDataHook,
  colorPickerItemTooltipDataHook,
} from '../dataHooks';
import { Tooltip } from '../../Tooltip';

export interface ColorPickerItemProps extends RadioButtonProps {
  className?: string;
  key?: number;
  disabled?: boolean;
  tooltip?: string;
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

  getComponent = () => {
    const { focused } = this.state;
    const { value, checked, onChange, className, disabled } = this.props;
    const finalChecked = checked && !disabled;

    return (
      <RadioButton
        className={st(
          classes.root,
          { checked, focused, isCrossedOut: disabled },
          className,
        )}
        aria-label={this.props['aria-label']}
        data-hook={ColorPickerItem.displayName}
        disabled={disabled}
        checked={finalChecked}
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

  render = () => {
    const { tooltip } = this.props;

    return !!tooltip ? (
      <Tooltip
        data-hook={colorPickerItemTooltipDataHook}
        content={tooltip}
        appendTo="window"
        placement="top"
      >
        {this.getComponent()}
      </Tooltip>
    ) : (
      this.getComponent()
    );
  };
}
