import * as React from 'react';
import { classes } from './BadgeExtendedExample.st.css';
import { Badge } from '../Badge';

export const BadgeExtendedExample: React.FC = () => (
  <div>
    <h3>
      Override the style for the basic wiring (regardless to any theme) - this
      is the common approach for most components
    </h3>
    <Badge className={classes.mixStyleParams}>Badge</Badge>
    <h3>
      Override the style params per theme - start with a theme and change what
      you want - this is common for a component with predefined variations
    </h3>
    <Badge className={classes.mixPriorityLight}>Badge</Badge>
    <Badge className={classes.mixPriorityPrimary}>Badge</Badge>

    <h3>*Deprecated* - Override the style params in the entire css file</h3>
    <Badge className={classes.mixAll}>Badge</Badge>
  </div>
);
