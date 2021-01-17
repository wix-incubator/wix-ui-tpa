import * as React from 'react';
import {
  Popover as CorePopover,
  PopoverProps as CorePopoverProps,
} from 'wix-ui-core/popover';

import { TPAComponentProps } from '../../types';
import { generateKey } from '../../common/random';
import { isSelectKey, KEYS } from '../../common/keyCodes';

import { TriggerAction } from './constants';
import { st, classes } from './Popover.st.css';

export interface PopoverProps
  extends TPAComponentProps,
    Omit<CorePopoverProps, 'shown'> {
  triggerAction?: TriggerAction;
  wiredToSiteColors?: boolean;
}

export const Popover: React.FC<PopoverProps> & {
  Element?: React.FC;
  Content?: React.FC;
} = props => {
  const {
    triggerAction,
    wiredToSiteColors,
    children,
    className,
    ...rest
  } = props;
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const id = React.useRef(generateKey('popover'));
  const isVertical = React.useMemo(
    () =>
      ['bottom', 'top'].some(position =>
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
      shown={isShown}
      moveBy={isVertical ? { y: 8 } : { x: 8 }}
      className={st(classes.root, { wired: wiredToSiteColors }, className)}
      {..._getCoreProps()}
      {...rest}
    >
      {React.cloneElement(
        Element,
        {},
        React.cloneElement(Element.props.children, _getTriggerProps()),
      )}
      {Content}
    </CorePopover>
  );

  function _getTriggerProps() {
    switch (triggerAction) {
      case TriggerAction.hover:
        return {
          'aria-describedby': id,
          onFocus: _handleOpen,
          onBlur: _handleClose,
        };

      case TriggerAction.click:
      default:
        return {};
    }
  }

  function _getCoreProps(): Partial<CorePopoverProps> {
    switch (triggerAction) {
      case TriggerAction.click:
        return {
          onClick: _handleOpen,
          onClickOutside: _handleClose,
          onKeyDown: _handleKeyDown,
          role: 'dialog',
          appendTo: 'parent',
        };
      case TriggerAction.hover:
      default:
        return {
          onMouseEnter: _handleOpen,
          onMouseLeave: _handleClose,
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

  function _handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (isSelectKey(e)) {
      e.preventDefault();
      _handleOpen();
    }
  }
};

Popover.defaultProps = {
  triggerAction: TriggerAction.click,
  wiredToSiteColors: true,
  placement: 'top',
};

Object.assign(Popover, {
  Element: CorePopover.Element,
  Content: CorePopover.Content,
});
