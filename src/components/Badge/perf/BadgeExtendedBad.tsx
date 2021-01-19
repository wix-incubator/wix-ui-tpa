import * as React from 'react';
import { Badge } from '../';
import { st, classes } from './BadgeExtended.st.css';

export const BadgePerfer = () => {
  return <Badge className={st(classes.bad)}>text</Badge>;
};
