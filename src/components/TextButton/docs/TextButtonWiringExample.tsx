import * as React from 'react';
import { TextButton } from '../TextButton';
import { classes } from './TextButtonWiringExample.st.css';

export const TextButtonWiringExample = () => (
  <TextButton className={classes.root}>Some text</TextButton>
);
