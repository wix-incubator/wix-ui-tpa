import * as React from 'react';
import { Text, TextProps } from '../Text';
import { st, classes } from './TextExtendedExample.st.css';

export const TextExtendedExample: React.FunctionComponent<TextProps> = props => (
  <Text className={st(classes.root)} {...props} />
);
