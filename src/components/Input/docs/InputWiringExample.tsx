import * as React from 'react';
import { Input, InputProps } from '../Input';
import { classes } from './InputWiringExample.st.css';

export const InputWiringExample: React.FunctionComponent<InputProps> = (
  props,
) => <Input {...props} className={classes.root} />;
