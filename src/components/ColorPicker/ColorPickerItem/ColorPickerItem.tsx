import * as React from "react";
import { st, classes } from "./ColorPickerItem.st.css";
import { RadioButton } from "wix-ui-core/radio-button";
import { RadioButtonProps } from "wix-ui-core/dist/src/components/radio-button/RadioButton";
import {
  colorPickerItemDataHook,
  colorPickerItemTooltipDataHook,
} from "../dataHooks";
import { Tooltip } from "../../Tooltip";
import { MobileTooltip } from "./MobileTooltip";
import { TPAComponentsConsumer } from "../../TPAComponentsConfig";

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

  getRadioVisual = ({ value }: ColorPickerItemProps) => (
    <div className={classes.radioOuter}>
      <div className={classes.radioInner} style={{ backgroundColor: value }} />
    </div>
  );

  getRadio = (props: ColorPickerItemProps, isMobile: boolean = false) => {
    const radioVisual = this.getRadioVisual(props);
    if (props.tooltip) {
      return isMobile ? (
        <MobileTooltip tooltip={props.tooltip}>{radioVisual}</MobileTooltip>
      ) : (
        <Tooltip
          data-hook={colorPickerItemTooltipDataHook}
          content={props.tooltip}
          appendTo="window"
          placement="top"
        >
          {this.getRadioVisual(props)}
        </Tooltip>
      );
    } else {
      return radioVisual;
    }
  };

  getComponent = () => {};

  render = () => {
    const { focused } = this.state;
    const { value, checked, onChange, className, disabled } = this.props;
    const finalChecked = checked && !disabled;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <RadioButton
            className={st(
              classes.root,
              { checked, focused, isCrossedOut: disabled },
              className
            )}
            aria-label={this.props["aria-label"]}
            data-hook={ColorPickerItem.displayName}
            disabled={disabled}
            checked={finalChecked}
            checkedIcon={this.getRadio(
              {
                ...this.props,
                checked: true,
              },
              mobile
            )}
            value={value}
            uncheckedIcon={this.getRadio(
              {
                ...this.props,
                checked: false,
              },
              mobile
            )}
            onChange={onChange}
            onHover={() => this.setState({ focused: true })}
            onIconBlur={() => this.setState({ focused: false })}
          />
        )}
      </TPAComponentsConsumer>
    );
  };
}
