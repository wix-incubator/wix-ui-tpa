import * as React from 'react';
import classNames from 'classnames';
import { SECTION_NOTIFICATION_DATA_HOOKS } from '../dataHooks';
import { SectionNotificationTextProps } from '../types';
import { classes } from '../SectionNotification.st.css';

export class SectionNotificationText extends React.Component<SectionNotificationTextProps> {
  static displayName = 'SectionNotification.Text';

  render() {
    return (
      <div
        className={classNames(classes.text, this.props.className)}
        data-hook={SECTION_NOTIFICATION_DATA_HOOKS.text}
      >
        {this.props.children}
      </div>
    );
  }
}
