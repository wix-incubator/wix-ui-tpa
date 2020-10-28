import * as React from 'react';
import { ProgressBar } from '../';
import { st, classes } from './ProgressBarWiringExample.st.css';

export const ProgressBarWiringExample = () => {
  return (
    <ProgressBar
      className={st(classes.root, {})}
      value={33}
      showProgressIndication
    />
  );
};
