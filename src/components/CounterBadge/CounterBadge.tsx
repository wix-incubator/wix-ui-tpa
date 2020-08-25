import * as React from 'react';
import { CounterBadge as WSRCounterBadge } from 'wix-style-react';
import { st, classes } from './CounterBadge.st.css';
import { TPAComponentProps } from '../../types';

export enum CounterBadgeTheme {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export interface CounterBadgeProps extends TPAComponentProps {
  children?: React.ReactNode;
  theme?: CounterBadgeTheme;
}

export class CounterBadge extends React.Component<CounterBadgeProps> {
  static displayName = 'CounterBadge';

  static defaultProps = {
    theme: CounterBadgeTheme.Primary,
  };

  render() {
    const { theme, children, className } = this.props;
    return (
      <WSRCounterBadge
        className={st(classes.root, { theme }, className)}
        showTooltip={false}
      >
        {children}
      </WSRCounterBadge>
    );
  }
}
