import * as React from 'react';
import extendedStyles from './TextFieldExtendedExample.st.css';
import { TextField, TextFieldProps } from '../TextField';
import { TextFieldTheme } from '../TextFieldEnums';

export const TextFieldExtendedExample: React.FunctionComponent<
  TextFieldProps
> = props => (
  <>
    <TextField {...props} {...extendedStyles('root', {}, props)} />
    <br />
    <TextField
      {...{ ...props, theme: TextFieldTheme.Line }}
      {...extendedStyles('root', {}, props)}
    />
  </>
);
