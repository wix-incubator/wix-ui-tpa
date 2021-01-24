import * as React from 'react';
import { classes, st } from './ColorPickerItem.st.css';
import { RadioButton } from 'wix-ui-core/radio-button';
import { RadioButtonProps } from 'wix-ui-core/dist/src/components/radio-button/RadioButton';
import {
  colorPickerItemDataHook,
  colorPickerItemTooltipDataHook,
} from '../dataHooks';
import { Tooltip } from '../../Tooltip';
import { MobileTooltip } from './MobileTooltip';
import { TPAComponentsConsumer } from '../../TPAComponentsConfig';
import { TOOLTIP_COMMON_PROPS } from './tooltipCommonProps';

export interface ColorPickerItemProps extends RadioButtonProps {
  className?: string;
  key?: number;
  isCrossedOut?: boolean;
  tooltip?: string;
  tooltipDataHook?: string;
}

interface ColorPickerItemState {
  focused: boolean;
}

interface ColorPickerItemDefaultProps {
  tooltipDataHook: string;
}

/** ColorPickerItem */
export class ColorPickerItem extends React.Component<
  ColorPickerItemProps,
  ColorPickerItemState
> {
  static displayName = colorPickerItemDataHook;
  static defaultProps: ColorPickerItemDefaultProps = {
    tooltipDataHook: colorPickerItemTooltipDataHook,
  };

  state = { focused: false };

  getRadioVisual = ({ value }: ColorPickerItemProps) => (
    <div className={classes.radioOuter}>
      <div
        className={classes.radioInner}
        style={{ backgroundColor: value as string }}
      />
    </div>
  );

  getRadio = (props: ColorPickerItemProps, isMobile: boolean = false) => {
    const radioVisual = this.getRadioVisual(props);
    if (props.tooltip) {
      return isMobile ? (
        <MobileTooltip tooltip={props.tooltip}>{radioVisual}</MobileTooltip>
      ) : (
        <Tooltip
          {...TOOLTIP_COMMON_PROPS}
          data-hook={props.tooltipDataHook}
          content={props.tooltip}
        >
          {radioVisual}
        </Tooltip>
      );
    }
    return radioVisual;
  };

  getFocusOnHoverBehaviour = (isMobile: boolean) => {
    if (isMobile) {
      return {};
    }
    return {
      onHover: () => {
        this.setState({ focused: true });
      },
      onIconBlur: () => {
        this.setState({ focused: false });
      },
    };
  };

  render = () => {
    const { focused } = this.state;
    const {
      value,
      checked,
      onChange,
      className,
      disabled,
      isCrossedOut,
      tooltipDataHook,
      name,
    } = this.props;
    const finalChecked = checked && !disabled;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <RadioButton
            className={st(
              classes.root,
              { checked, focused, isCrossedOut },
              className,
            )}
            aria-label={this.props['aria-label']}
            data-hook={ColorPickerItem.displayName}
            data-tooltip-hook={tooltipDataHook}
            disabled={disabled}
            checked={finalChecked}
            checkedIcon={this.getRadio(
              {
                ...this.props,
                checked: true,
              },
              mobile,
            )}
            value={value}
            uncheckedIcon={this.getRadio(
              {
                ...this.props,
                checked: false,
              },
              mobile,
            )}
            onChange={onChange}
            {...this.getFocusOnHoverBehaviour(mobile)}
            name={name}
          />
        )}
      </TPAComponentsConsumer>
    );
  };
}
