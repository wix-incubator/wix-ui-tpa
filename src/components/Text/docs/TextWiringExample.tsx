import * as React from 'react';
import { Text, TextProps } from '../Text';
import { classes } from './TextWiringExample.st.css';

export const TextWiringExample: React.FunctionComponent<TextProps> = props => (
  <Text className={classes.root}>Some text</Text>
);
