import * as React from 'react';
import { TextButtonProps, TextButton } from '../TextButton';
import { st, classes } from './TextButtonWithStylesExample.st.css';

export const TextButtonWithStylesExample: React.FunctionComponent<TextButtonProps> = props => (
  <TextButton {...props} className={st(classes.root)}>
    Text Button
  </TextButton>
);
