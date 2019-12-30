import * as React from 'react';

import styles from './SocialBarIcon.st.css';
import { Tooltip } from '../Tooltip';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ButtonProps } from 'wix-ui-core/dist/src/components/button-next/button-next';
import { TPAComponentProps } from '../../types';
import { IconButton, Skins } from '../IconButton';
import { SocialBarInjectedProps } from './SocialBar';

export interface SocialBarIconProps
  extends ButtonProps,
    TPAComponentProps,
    SocialBarInjectedProps {
  tooltip?: string;
  icon: React.ReactNode;
}

export class SocialBarIcon extends React.Component<SocialBarIconProps> {
  static defaultProps = { socialBarTheme: 'light' };

  render() {
    const { children, tooltip, socialBarTheme, ...rest } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles('root', { theme: socialBarTheme }, rest)}>
            <Tooltip
              appendTo={'scrollParent'}
              content={tooltip}
              placement="top"
              disabled={!tooltip || mobile}
            >
              <IconButton
                className={styles.iconButton}
                skin={Skins.Full}
                as="a"
                {...rest}
              />
            </Tooltip>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
