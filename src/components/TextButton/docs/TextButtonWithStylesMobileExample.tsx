import * as React from 'react';
import { TextButton, TextButtonProps } from '../TextButton';
import { classes } from './TextButtonWithStylesExample.st.css';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';

export const TextButtonWithStylesMobileExample: React.FunctionComponent<TextButtonProps> = props => (
  <TPAComponentsProvider value={{ mobile: true }}>
    <TextButton {...props} className={classes.root}>
      Text Button
    </TextButton>
  </TPAComponentsProvider>
);
