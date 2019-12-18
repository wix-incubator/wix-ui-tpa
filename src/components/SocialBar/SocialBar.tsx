import * as React from 'react';
import { SocialBarIcon } from './SocialBarIcon';

import styles from './SocialBar.st.css';

export type SocialBarTheme = 'light' | 'dark';

export interface SocialBarProps {
  theme?: SocialBarTheme;
}

interface DefaultProps {
  theme: SocialBarTheme;
}

/** SocialBar */
export class SocialBar extends React.Component<SocialBarProps> {
  static Icon = SocialBarIcon;
  static displayName = 'SocialBar';
  static defaultProps: DefaultProps = { theme: 'light' };

  render() {
    const { theme, children, ...rest } = this.props;

    return <div {...styles('root', { theme }, rest)}>{children}</div>;
  }
}
