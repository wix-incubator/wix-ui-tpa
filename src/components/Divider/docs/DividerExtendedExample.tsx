import * as React from 'react';
import { Divider } from '../Divider';
import { classes } from './DividerExtendedExample.st.css';

export const DividerExtendedExample = (props) => (
  <Divider {...props} className={classes.root} />
);
