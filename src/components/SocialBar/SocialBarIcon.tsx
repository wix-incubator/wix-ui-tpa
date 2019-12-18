import * as React from 'react';

import styles from './SocialBar.st.css';
import { Tooltip } from '../Tooltip';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

interface SocialBarIconProps {
  tooltip?: string;
}

export class SocialBarIcon extends React.Component<SocialBarIconProps> {
  render() {
    const { children, tooltip, ...rest } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles('icon', {}, rest)}>
            <Tooltip
              appendTo={'scrollParent'}
              content={tooltip}
              placement="bottom"
              disabled={!tooltip || mobile}
            >
              {children}
            </Tooltip>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
