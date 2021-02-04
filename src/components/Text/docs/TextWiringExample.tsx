import * as React from 'react';
import { TEXT_PRIORITY } from '../constants';
import { Text } from '../Text';
import { classes } from './TextWiringExample.st.css';

export const TextWiringExample = () => (
  <>
    <Text className={classes.root}>Primary Priority</Text> <br />
    <Text className={classes.root} priority={TEXT_PRIORITY.secondary}>
      Secondary Priority
    </Text>
  </>
);
