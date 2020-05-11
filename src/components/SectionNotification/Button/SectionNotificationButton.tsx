import * as React from 'react';
import { Button, ButtonProps, PRIORITY, SIZE } from '../../Button';
import {
  TextButton,
  TextButtonProps,
  TEXT_BUTTON_PRIORITY,
} from '../../TextButton';
import { SECTION_NOTIFICATION_DATA_HOOKS } from '../dataHooks';
import { classes as parentClasses } from '../SectionNotification.st.css';
import { SectionNotificationButtonProps } from '../types';
import { st, classes } from './SectionNotificationButton.st.css';

export { TEXT_BUTTON_PRIORITY, PRIORITY as BUTTON_PRIORITY, BUTTON_TYPE };

enum BUTTON_TYPE {
  default = 'default',
  text = 'text',
}

type TPAButtonProps = ButtonProps | TextButtonProps;
export class SectionNotificationButton extends React.Component<
  SectionNotificationButtonProps | TPAButtonProps
> {
  static displayName = 'SectionNotification.Button';
  static defaultProps = {
    type: BUTTON_TYPE.default,
  };

  textButtonDefaultProps = {
    priority: TEXT_BUTTON_PRIORITY.primary,
  };

  buttonDefaultProps = {
    priority: PRIORITY.basic,
    size: SIZE.tiny,
  };

  render() {
    const { children, type, ...buttonProps } = this.props;
    const ButtonComponent = (type === BUTTON_TYPE.text
      ? TextButton
      : Button) as React.ComponentClass;

    const defaultButtonProps: TPAButtonProps =
      type === BUTTON_TYPE.text
        ? this.textButtonDefaultProps
        : this.buttonDefaultProps;

    return (
      <div
        className={st(classes.root, { type }, parentClasses.button)}
        data-hook={SECTION_NOTIFICATION_DATA_HOOKS.button}
      >
        <ButtonComponent
          className={st(classes.button, {
            priority:
              (buttonProps as TPAButtonProps).priority ||
              defaultButtonProps.priority,
          })}
          {...defaultButtonProps}
          {...buttonProps}
        >
          {children}
        </ButtonComponent>
      </div>
    );
  }
}
