import * as React from "react";
import { colorPickerItemTooltipDataHook } from "../dataHooks";
import { Tooltip } from "../../Tooltip";
import Timeout = NodeJS.Timeout;

const DEFAULT_DELAY = 1000;

type LongPressProps = {
  onLongPress(): void;
  delay?: number;
  children: React.ReactNode;
};

export class LongPress extends React.Component<LongPressProps> {
  private pressTimer: Timeout;

  private handlePress = () => {
    const { delay = DEFAULT_DELAY, onLongPress } = this.props;
    this.pressTimer = setTimeout(onLongPress, delay);
  };

  private handleRelease = () => {
    clearTimeout(this.pressTimer);
  };

  render = () => {
    const { children } = this.props;
    if (typeof children === "string" || !children) {
      return children || "";
    }
    return React.cloneElement(children as any, {
      onTouchStart: this.handlePress,
      onTouchEnd: this.handleRelease,
      onMouseDown: this.handlePress,
      onMouseUp: this.handleRelease,
      onMouseLeave: this.handleRelease,
    });
  };
}

export type MobileTooltipProps = {
  children: React.ReactNode;
  tooltip: string;
};

type MobileTooltipState = {
  shown: boolean;
};

export class MobileTooltip extends React.Component<
  MobileTooltipProps,
  MobileTooltipState
> {
  state = {
    shown: false,
  };

  private show = () => {
    this.setState({
      shown: true,
    });
  };
  private hide = () => {
    this.setState({
      shown: false,
    });
  };

  render = () => {
    const { children, tooltip } = this.props;

    return (
      <Tooltip
        data-hook={colorPickerItemTooltipDataHook}
        content={tooltip}
        appendTo="window"
        placement="top"
        disabled
        shown={this.state.shown}
        onClickOutside={this.hide}
      >
        <LongPress onLongPress={this.show}>{children}</LongPress>
      </Tooltip>
    );
  };
}
