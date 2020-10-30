import * as React from 'react';
import { classes } from './BadgeExtendedExample.st.css';
import { Badge, BADGE_PRIORITY } from '../Badge';

export class BadgeExtendedExample extends React.Component {
  render = () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Badge {...this.props} className={classes.mixOverrides}>
        Override the style params using an optimized class
      </Badge>
      <Badge {...this.props} className={classes.mixAll}>
        *Deprecated* - Override the style params for the entire css mixin
      </Badge>
    </div>
  );
}
