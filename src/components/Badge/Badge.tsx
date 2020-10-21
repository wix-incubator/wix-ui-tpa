import * as React from 'react';
import { st, classes, vars } from './Badge.st.css';
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
  styleOverrides?: {
    BadgeBgColor?: string;
    BadgeTextColor?: string;
  };
}

interface DefaultProps {
  priority: BADGE_PRIORITY;
  styleOverrides: Object;
}

class Badge extends React.Component<BadgeProps> {
  static displayName = 'Badge';
  static defaultProps: DefaultProps = {
    priority: BADGE_PRIORITY.default,
    styleOverrides: {},
  };

  render() {
    const { priority, children, className, icon, styleOverrides } = this.props;
    return (
      <div
        data-priority={priority}
        className={st(classes.root, { priority, withIcon: !!icon }, className)}
        style={{
          [vars.BadgeBgColor]: styleOverrides.BadgeBgColor,
          [vars.BadgeTextColor]: styleOverrides.BadgeTextColor,
        }}
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
