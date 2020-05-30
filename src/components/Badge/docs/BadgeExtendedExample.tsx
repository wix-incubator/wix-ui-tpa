import * as React from 'react';
import { st, classes } from './BadgeExtendedExample.st.css';
import { Badge } from '../Badge';

export class BadgeExtendedExample extends React.Component {
  render = () => (
    <Badge {...this.props} className={st(classes.root)}>
      I'm extended badge
    </Badge>
  );
}
