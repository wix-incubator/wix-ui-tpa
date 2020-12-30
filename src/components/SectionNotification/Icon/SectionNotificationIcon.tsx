import * as React from 'react';
import classNames from 'classnames';
import { SECTION_NOTIFICATION_DATA_HOOKS } from '../dataHooks';
import { SectionNotificationIconProps } from '../types';
import { classes } from '../SectionNotification.st.css';

export class SectionNotificationIcon extends React.Component<SectionNotificationIconProps> {
  static displayName = 'SectionNotification.Icon';

  render() {
    return (
      <div
        className={classNames(classes.icon, this.props.className)}
        data-hook={SECTION_NOTIFICATION_DATA_HOOKS.icon}
      >
        {this.props.icon}
      </div>
    );
  }
}
