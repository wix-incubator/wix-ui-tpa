import * as React from 'react';
import { Divider } from '../Divider';
import { st, classes } from './DividerExtendedExample.st.css';

export const DividerExtendedExample = props => (
  <Divider className={st(classes.root)} {...props} />
);
