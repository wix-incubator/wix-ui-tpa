import * as React from 'react';
import { Badge } from '../';
import { st, classes } from './BadgeExtendedGood.st.css';

export const BadgePerfer = () => {
  return <Badge className={st(classes.good)}>text</Badge>;
};
