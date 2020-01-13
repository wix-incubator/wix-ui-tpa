import * as React from 'react';
import classNames from 'classnames';
import { SECTION_NOTIFICATION_DATA_HOOKS } from '../dataHooks';
import { SectionNotificationIconProps } from '../types';
import styles from '../SectionNotification.st.css';

export class SectionNotificationIcon extends React.Component<
  SectionNotificationIconProps
> {
  static displayName = 'SectionNotification.Icon';
  static defaultProps = {
    'data-hook': SECTION_NOTIFICATION_DATA_HOOKS.icon,
  };

  render() {
    return (
      <div
        className={classNames(styles.icon, this.props.className)}
        data-hook={this.props['data-hook']}
      >
        {this.props.icon}
      </div>
    );
  }
}
