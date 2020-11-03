import * as React from 'react';
import { classes } from './BadgeExtendedExample.st.css';
import { Badge, BADGE_PRIORITY } from '../Badge';

export const BadgeExtendedExample: React.FC = () => (
  <div>
    <h3>
      Override the style params using an optimized class{' '}
      <code>.badgeOVerrides</code>
    </h3>
    <Badge className={classes.mixStyleParams}>Badge</Badge>
    <h3>
      Override the style params using an optimized class - also on variations
      like <code>BADGE_PRIORITY.primary</code>
    </h3>
    <Badge priority={BADGE_PRIORITY.primary} className={classes.mixStyleParams}>
      Badge
    </Badge>
    <h3>*Deprecated* - Override the style params for the entire css mixin</h3>
    <Badge className={classes.mixAll}>Badge</Badge>
  </div>
);
