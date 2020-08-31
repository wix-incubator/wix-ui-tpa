import * as React from 'react';
import { Tooltip } from '../../Tooltip';
import { TOOLTIP_COMMON_PROPS } from './tooltipCommonProps';
import Timeout = NodeJS.Timeout;

const DEFAULT_DELAY = 1000;

interface LongPressProps {
  onLongPress(): void;
  delay?: number;
  children: React.ReactNode;
}

export class LongPress extends React.Component<LongPressProps> {
  private pressTimer: Timeout;

  private readonly handlePress = () => {
    const { delay = DEFAULT_DELAY, onLongPress } = this.props;
    this.pressTimer = setTimeout(onLongPress, delay);
  };

  private readonly handleRelease = () => {
    clearTimeout(this.pressTimer);
  };

  render = () => {
    const { children } = this.props;
    if (typeof children === 'string' || !children) {
      return children || '';
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

export interface MobileTooltipProps {
  children: React.ReactNode;
  tooltip: string;
}

interface MobileTooltipState {
  shown: boolean;
}

export class MobileTooltip extends React.Component<
  MobileTooltipProps,
  MobileTooltipState
> {
  state = {
    shown: false,
  };

  private readonly show = () => {
    this.setState({
      shown: true,
    });
  };
  private readonly hide = () => {
    this.setState({
      shown: false,
    });
  };

  render = () => {
    const { children, tooltip } = this.props;

    return (
      <Tooltip
        {...TOOLTIP_COMMON_PROPS}
        content={tooltip}
        disabled
        shown={this.state.shown}
        onClickOutside={this.hide}
      >
        <LongPress onLongPress={this.show}>{children}</LongPress>
      </Tooltip>
    );
  };
}
