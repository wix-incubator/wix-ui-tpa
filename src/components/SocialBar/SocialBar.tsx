import * as React from 'react';
import { SocialBarIcon } from './SocialBarIcon';

import styles from './SocialBar.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export type SocialBarTheme = 'light' | 'dark';

export interface SocialBarProps {
  theme?: SocialBarTheme;
}

interface DefaultProps {
  theme: SocialBarTheme;
}

export interface SocialBarInjectedProps {
  socialBarTheme?: SocialBarTheme;
}

/** SocialBar */
export class SocialBar extends React.Component<SocialBarProps> {
  static Icon = SocialBarIcon;
  static displayName = 'SocialBar';
  static defaultProps: DefaultProps = { theme: 'light' };

  render() {
    const { theme, children, ...rest } = this.props;

    const childProps: SocialBarInjectedProps = { socialBarTheme: theme };

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles('root', { mobile }, rest)}>
            {React.Children.map(children, child => {
              if (!React.isValidElement(child)) {
                return child;
              }
              return (
                <div className={styles.item}>
                  {React.cloneElement(child, childProps)}
                </div>
              );
            })}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
