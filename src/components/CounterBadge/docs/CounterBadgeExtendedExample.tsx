import * as React from 'react';
import { CounterBadge } from '..';
import { classes } from './CounterBadgeExtendedExample.st.css';

export const CounterBadgeExtendedExample = () => {
  return (
    <div>
      <h3>
        Override the style for the basic wiring (regardless to any theme) - this
        is the common approach for most components
      </h3>
      <CounterBadge className={classes.mixStyleParams} value={20} />
      <h3>
        Override the style params per theme - start with a theme and change what
        you want - this is common for a component with predefined variations
      </h3>
      <CounterBadge className={classes.mixPriorityPrimary} value={20} />
      <CounterBadge className={classes.mixPrioritySecondary} value={20} />
    </div>
  );
};
