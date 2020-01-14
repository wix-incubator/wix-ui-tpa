import * as React from 'react';
import {
  NOTIFICATION_TYPE,
  SectionNotificationDefaultProps,
  SectionNotificationProps,
} from './types';
import { SectionNotificationButton } from './Button/SectionNotificationButton';
import { SectionNotificationText } from './Text/SectionNotificationText';
import { SectionNotificationIcon } from './Icon/SectionNotificationIcon';
import styles from './SectionNotification.st.css';

/** Section notification displays an important, succinct message, and provides actions for users to address and can not be dismissed.  */
export class SectionNotification extends React.Component<
  SectionNotificationProps
> {
  static displayName = 'SectionNotification';
  static defaultProps: SectionNotificationDefaultProps = {
    type: NOTIFICATION_TYPE.default,
  };

  static Text = SectionNotificationText;
  static Icon = SectionNotificationIcon;
  static Button = SectionNotificationButton;

  render() {
    const { children, type } = this.props;
    const isError = type === NOTIFICATION_TYPE.error;

    const contents = [];
    const buttons = [];

    React.Children.forEach(children, (child: React.ReactElement) => {
      if (child && child.type === SectionNotificationButton) {
        buttons.push(child);
      } else {
        contents.push(child);
      }
    });

    return (
      <div
        {...styles('root', { error: isError }, this.props)}
        data-error={isError}
        aria-live="assertive"
      >
        <div className={styles.main}>
          <div className={styles.contentsWrapper}>{contents}</div>
          <div className={styles.buttonsWrapper}>{buttons}</div>
        </div>
      </div>
    );
  }
}
