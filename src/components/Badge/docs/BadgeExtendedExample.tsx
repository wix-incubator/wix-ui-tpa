import * as React from 'react';
import extendedStyles from './BadgeExtendedExample.st.css';
import { Badge } from '../Badge';

export class BadgeExtendedExample extends React.Component {
  render = () => (
    <Badge {...this.props} {...extendedStyles('root', {}, this.props)}>
      I'm extended badge
    </Badge>
  );
}
