import * as React from 'react';
import { classes } from './TextFieldExtendedExample.st.css';
import { TextField, TextFieldProps } from '../TextField';
import { TextFieldTheme } from '../TextFieldEnums';

export const TextFieldExtendedExample: React.FunctionComponent<TextFieldProps> = (
  props,
) => (
  <>
    <TextField {...props} className={classes.root} />
    <br />
    <TextField
      {...{ ...props, theme: TextFieldTheme.Line }}
      className={classes.root}
    />
  </>
);
