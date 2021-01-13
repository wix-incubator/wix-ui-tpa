import * as React from 'react';
import { Divider } from '../Divider';
import { classes } from './DividerWiringExample.st.css';

export const DividerWiringExample = (props) => (
  <Divider {...props} className={classes.root} />
);
