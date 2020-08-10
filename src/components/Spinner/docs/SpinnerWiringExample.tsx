import * as React from 'react';
import { Spinner } from '../';
import { classes } from './SpinnerWiringExample.st.css';

export const SpinnerWiringExample = () => {
  return (
    <div style={{ height: '140px', position: 'relative' }}>
      <Spinner className={classes.root} />
    </div>
  );
};
