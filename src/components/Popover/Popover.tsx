import * as React from 'react';
import {
  Popover as CorePopover,
  PopoverProps as CorePopoverProps,
} from 'wix-ui-core/popover';

import { TPAComponentProps } from '../../types';
import { generateKey } from '../../common/random';
import { KEYS } from '../../common/keyCodes';

import { TriggerAction } from './constants';
import { st, classes } from './Popover.st.css';

export interface PopoverProps
  extends TPAComponentProps,
    Omit<CorePopoverProps, 'shown'> {
  triggerAction?: TriggerAction;
  wiredToSiteColors?: boolean;
}

interface StaticComponents {
  Element?: React.FC;
  Content?: React.FC;
}

export const Popover: React.FC<PopoverProps> & StaticComponents = props => {
  const {
    triggerAction,
    wiredToSiteColors,
    children,
    className,
    ...rest
  } = props;
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const [id] = React.useState(generateKey('popover'));

  const [Element, Content] = React.Children.toArray(
    children,
  ) as React.ReactElement[];

  return (
    <CorePopover
      id={id}
      showArrow
      shown={isShown}
      className={st(classes.root, { wired: wiredToSiteColors }, className)}
      {...getCoreProps()}
      {...rest}
    >
      {React.cloneElement(
        Element,
        {},
        React.cloneElement(Element.props.children, getTriggerProps()),
      )}
      {Content}
    </CorePopover>
  );

  function getTriggerProps() {
    switch (triggerAction) {
      case TriggerAction.hover:
        return {
          'aria-describedby': id,
          onFocus: handleOpen,
          onBlur: handleClose,
        };

      case TriggerAction.click:
      default:
        return {};
    }
  }

  function getCoreProps(): Partial<CorePopoverProps> {
    switch (triggerAction) {
      case TriggerAction.click:
        return {
          onClick: handleOpen,
          onClickOutside: handleClose,
          onKeyDown: handleKeyDown,
          role: 'dialog',
          appendTo: 'parent',
        };
      case TriggerAction.hover:
      default:
        return {
          onMouseEnter: handleOpen,
          onMouseLeave: handleClose,
          role: 'tooltip',
        };
    }
  }

  function handleOpen() {
    setIsShown(true);
  }

  function handleClose() {
    setIsShown(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === KEYS.Spacebar || e.key === KEYS.Enter) {
      e.preventDefault();
      handleOpen();
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
