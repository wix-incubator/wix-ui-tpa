import * as React from 'react';
import { st, classes } from './Badge.st.css';
import { TPAComponentProps } from '../../types';

export enum BADGE_PRIORITY {
  default = 'default',
  light = 'light',
  primary = 'primary',
}

export interface BadgeProps extends TPAComponentProps {
  /** define style preset */
  priority?: BADGE_PRIORITY;
  icon?: React.ReactElement;
}

interface DefaultProps {
  priority: BADGE_PRIORITY;
}

class Badge extends React.Component<BadgeProps> {
  static displayName = 'Badge';
  static defaultProps: DefaultProps = { priority: BADGE_PRIORITY.default };

  render() {
    const { priority, children, className, icon } = this.props;
    return (
      <div
        className={st(
          classes.root,
          { withIcon: !!icon },
          classes[`priority-${priority}`],
          className,
        )}
        data-priority={priority}
        data-hook={this.props['data-hook']}
      >
        <div className={classes.innerContainer}>
          {icon && (
            <div data-hook={'badge-icon'} className={classes.icon}>
              {icon}
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
}

export { Badge };
