import * as React from 'react';
import {
  Popover as CorePopover,
  PopoverProps as CorePopoverProps,
} from 'wix-ui-core/popover';
import { TPAComponentProps } from '../../types';
import { generateKey } from '../../common/random';
import { TriggerAction } from './constants';
import { st, classes } from './Popover.st.css';

export interface PopoverProps
  extends TPAComponentProps,
    Omit<CorePopoverProps, 'shown'> {
  shown?: boolean;
  triggerAction?: TriggerAction;
  wiredToSiteColors?: boolean;
}

export const Popover: React.FC<PopoverProps> & {
  Element?: React.FC;
  Content?: React.FC;
} = (props) => {
  const {
    triggerAction,
    wiredToSiteColors,
    children,
    className,
    shown,
    ...rest
  } = props;
  const [isShown, setIsShown] = React.useState<boolean>(shown);
  const isControlled = React.useRef(
    typeof shown !== 'undefined' || triggerAction === TriggerAction.click,
  );
  const id = React.useRef(generateKey('popover'));
  const isVertical = React.useMemo(
    () =>
      ['bottom', 'top'].some((position) =>
        new RegExp(position).test(props.placement),
      ),
    [props.placement],
  );

  const [Element, Content] = React.Children.toArray(children).sort(
    (e1: React.ReactElement, e2: React.ReactElement) => {
      if (![e1, e2].every(React.isValidElement)) {
        return;
      }

      return e1.type === Popover.Element ? -1 : 0;
    },
  ) as React.ReactElement[];

  return (
    <CorePopover
      showArrow
      shown={shown || isShown}
      moveBy={isVertical ? { y: 8 } : { x: 8 }}
      className={st(classes.root, { wired: wiredToSiteColors }, className)}
      {..._getCoreProps(isControlled)}
      {...rest}
    >
      {React.cloneElement(
        Element,
        {},
        React.cloneElement(
          Element.props.children,
          _getTriggerProps(isControlled),
        ),
      )}
      {Content}
    </CorePopover>
  );

  function _getTriggerProps(_isControlled) {
    switch (triggerAction) {
      case TriggerAction.hover:
        return {
          'aria-describedby': id,
          ...(_isControlled.current
            ? {}
            : {
                onFocus: _handleOpen,
                onBlur: _handleClose,
              }),
        };

      case TriggerAction.click:
      default:
        return {};
    }
  }

  function _getCoreProps(_isControlled): Partial<CorePopoverProps> {
    switch (triggerAction) {
      case TriggerAction.click:
        return {
          role: 'dialog',
          appendTo: 'parent',
        };
      case TriggerAction.hover:
      default:
        return {
          ...(_isControlled.current
            ? {}
            : {
                onMouseEnter: _handleOpen,
                onMouseLeave: _handleClose,
              }),
          role: 'tooltip',
          id: id.current,
        };
    }
  }

  function _handleOpen() {
    setIsShown(true);
  }

  function _handleClose() {
    setIsShown(false);
  }
};

Popover.defaultProps = {
  triggerAction: TriggerAction.hover,
  wiredToSiteColors: true,
  placement: 'top',
};
Popover.displayName = 'Popover';

Object.assign(Popover, {
  Element: CorePopover.Element,
  Content: CorePopover.Content,
});
