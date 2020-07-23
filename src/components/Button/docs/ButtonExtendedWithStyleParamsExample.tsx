import * as React from 'react';
import { ButtonProps, Button } from '../Button';
import { classes } from './ButtonExtendedWithStyleParamsExample.st.css';

export const ButtonExtendedWithStyleParamsExample: React.FunctionComponent<ButtonProps> = props => (
  <div>
    <Button upgrade {...props} className={classes.root}>
      Button
    </Button>
  </div>
);
