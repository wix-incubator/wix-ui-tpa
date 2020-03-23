import * as React from 'react';
import styles from './Badge.st.css';
import { TPAComponentProps } from '../../types';

export enum BADGE_PRIORITY {
  default = 'default',
  light = 'light',
  primary = 'primary',
}

export interface BadgeProps extends TPAComponentProps {
  /** define style preset */
  priority?: BADGE_PRIORITY;
}

interface DefaultProps {
  priority: BADGE_PRIORITY;
}

class Badge extends React.Component<BadgeProps> {
  static displayName = 'Badge';
  static defaultProps: DefaultProps = { priority: BADGE_PRIORITY.default };

  render() {
    const { priority, children, ...rest } = this.props;
    return (
      <div
        data-priority={priority}
        {...styles(
          'root',
          {
            priority,
          },
          rest,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export { Badge };
