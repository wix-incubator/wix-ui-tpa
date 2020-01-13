import * as React from 'react';
import { Button, ButtonProps } from '../../Button';
import { TextButton, TextButtonProps } from '../../TextButton';
import { SECTION_NOTIFICATION_DATA_HOOKS } from '../dataHooks';
import styles from '../SectionNotification.st.css';
import { BUTTON_TYPE, SectionNotificationButtonProps } from '../types';

export class SectionNotificationButton extends React.Component<
  SectionNotificationButtonProps | (ButtonProps & TextButtonProps)
> {
  static displayName = 'SectionNotification.Button';
  static defaultProps = {
    type: BUTTON_TYPE.default,
    'data-hook': SECTION_NOTIFICATION_DATA_HOOKS.button,
  };

  render() {
    const { children, type, ...buttonProps } = this.props;
    const ButtonComponent = (type === BUTTON_TYPE.text
      ? TextButton
      : Button) as React.ComponentClass;

    return (
      <div className={styles.button}>
        <ButtonComponent data-hook={this.props['data-hook']} {...buttonProps}>
          {children}
        </ButtonComponent>
      </div>
    );
  }
}
