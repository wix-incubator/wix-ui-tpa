import * as React from 'react';
import { TextButton, TextButtonProps } from '../TextButton';
import extendedStyles from './TextButtonWithStylesExample.st.css';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';

export const TextButtonWithStylesMobileExample: React.FunctionComponent<TextButtonProps> = props => (
  <TPAComponentsProvider value={{ mobile: true }}>
    <TextButton {...props} {...extendedStyles('root', {}, props)}>
      Text Button
    </TextButton>
  </TPAComponentsProvider>
);
