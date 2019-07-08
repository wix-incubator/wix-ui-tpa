import * as React from 'react';
import { TextButtonProps, TextButton } from '../TextButton';
import extendedStyles from './TextButtonWithStylesExample.st.css';

export const TextButtonWithStylesExample: React.FunctionComponent<
  TextButtonProps
> = props => (
  <TextButton {...props} {...extendedStyles('root', {}, props)}>
    Text Button
  </TextButton>
);
