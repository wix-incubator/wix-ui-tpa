import * as React from 'react';
import { TextButtonProps, TextButton } from '../TextButton';
import { st, classes } from './TextButtonWithStylesExample.st.css';

export const TextButtonWithStylesExample: React.FunctionComponent<TextButtonProps> = props => (
  <TextButton className={st(classes.root)} {...props}>
    Text Button
  </TextButton>
);
