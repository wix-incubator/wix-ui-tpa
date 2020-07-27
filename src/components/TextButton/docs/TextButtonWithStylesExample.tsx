import * as React from 'react';
import { TextButtonProps, TextButton } from '../TextButton';
import { classes } from './TextButtonWithStylesExample.st.css';

export const TextButtonWithStylesExample: React.FunctionComponent<TextButtonProps> = props => (
  <TextButton {...props} className={classes.root}>
    Text Button
  </TextButton>
);
