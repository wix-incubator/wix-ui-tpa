import * as React from 'react';
import { Input, InputProps } from '../Input';
import { classes } from './InputExtendedExample.st.css';

export const InputExtendedExample: React.FunctionComponent<InputProps> = (
  props,
) => <Input {...props} className={classes.root} />;
