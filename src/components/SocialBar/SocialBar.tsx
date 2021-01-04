import * as React from 'react';
import { SocialBarIcon } from './SocialBarIcon';

import { st, classes } from './SocialBar.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';

export type SocialBarTheme = 'light' | 'dark';

export interface SocialBarProps extends TPAComponentProps {
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
    const { theme, children, className } = this.props;

    const childProps: SocialBarInjectedProps = { socialBarTheme: theme };

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            className={st(classes.root, { mobile }, className)}
            data-hook={this.props['data-hook']}
          >
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) {
                return child;
              }
              return (
                <div className={classes.item}>
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
