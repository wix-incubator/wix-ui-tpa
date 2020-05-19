import * as React from 'react';
import { TextButton, TextButtonProps } from '../TextButton';
import { st, classes } from './TextButtonWithStylesExample.st.css';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';

export const TextButtonWithStylesMobileExample: React.FunctionComponent<TextButtonProps> = props => (
  <TPAComponentsProvider value={{ mobile: true }}>
    <TextButton className={st(classes.root)} {...props}>
      Text Button
    </TextButton>
  </TPAComponentsProvider>
);
