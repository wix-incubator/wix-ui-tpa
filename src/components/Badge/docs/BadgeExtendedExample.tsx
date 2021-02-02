import * as React from 'react';
import { st, classes } from './BadgeExtendedExample.st.css';
import { Badge } from '../Badge';

export const BadgeExtendedExample: React.FC = () => (
  <Badge className={st(classes.root)}>Badge</Badge>
);
