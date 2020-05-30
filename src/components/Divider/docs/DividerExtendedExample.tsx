import * as React from 'react';
import { Divider } from '../Divider';
import { st, classes } from './DividerExtendedExample.st.css';

export const DividerExtendedExample = props => (
  <Divider {...props} className={st(classes.root)} />
);
