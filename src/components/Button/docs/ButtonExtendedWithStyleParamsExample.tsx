import * as React from 'react';
import { ButtonProps, Button } from '../Button';
import { st, classes } from './ButtonExtendedWithStyleParamsExample.st.css';

export const ButtonExtendedWithStyleParamsExample: React.FunctionComponent<ButtonProps> = (
  props,
) => (
  <div>
    <Button upgrade {...props} className={st(classes.root)}>
      Button
    </Button>
  </div>
);
