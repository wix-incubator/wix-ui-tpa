import * as React from 'react';
import extendedStyles from './TextFieldExtendedExample.st.css';
import { TextField, TextFieldProps } from '../TextField';

export const TextFieldExtendedExample: React.FunctionComponent<
  TextFieldProps
> = props => <TextField {...props} {...extendedStyles('root', {}, props)} />;
