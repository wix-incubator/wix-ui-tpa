import * as React from 'react';
import styles from './Badge.st.css';

export enum BADGE_PRIORITY {
  default = 'default',
  light = 'light',
  primary = 'primary',
}

export interface BadgeProps {
  priority?: BADGE_PRIORITY;
}

class Badge extends React.Component<BadgeProps> {
  static displayName = 'Badge';
  static defaultProps: BadgeProps = {
    priority: BADGE_PRIORITY.default,
  };

  render() {
    const { priority, children, ...rest } = this.props;
    return (
      <div
        {...styles(
          'root',
          {
            priority,
          },
          rest,
        )}
      >
        {children}
      </div>
    );
  }
}

export { Badge };
