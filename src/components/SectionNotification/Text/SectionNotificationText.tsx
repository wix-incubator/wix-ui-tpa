import * as React from 'react';
import classNames from 'classnames';
import { SECTION_NOTIFICATION_DATA_HOOKS } from '../dataHooks';
import { SectionNotificationTextProps } from '../types';
import styles from '../SectionNotification.st.css';

export class SectionNotificationText extends React.Component<
  SectionNotificationTextProps
> {
  static displayName = 'SectionNotification.Text';
  static defaultProps = {
    'data-hook': SECTION_NOTIFICATION_DATA_HOOKS.text,
  };

  render() {
    return (
      <div
        className={classNames(styles.text, this.props.className)}
        data-hook={this.props['data-hook']}
      >
        {this.props.children}
      </div>
    );
  }
}
