import * as React from 'react';
import { st, classes } from './TextFieldExtendedExample.st.css';
import { TextField, TextFieldProps } from '../TextField';
import { TextFieldTheme } from '../TextFieldEnums';

export const TextFieldExtendedExample: React.FunctionComponent<TextFieldProps> = props => (
  <>
    <TextField {...props} className={st(classes.root)} />
    <br />
    <TextField
      {...{ ...props, theme: TextFieldTheme.Line }}
      className={st(classes.root)}
    />
  </>
);
