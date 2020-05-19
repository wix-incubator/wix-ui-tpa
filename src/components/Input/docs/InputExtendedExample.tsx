import * as React from 'react';
import { Input, InputProps } from '../Input';
import { st, classes } from './InputExtendedExample.st.css';

export const InputExtendedExample: React.FunctionComponent<InputProps> = props => (
  <Input className={st(classes.root)} {...props} />
);
