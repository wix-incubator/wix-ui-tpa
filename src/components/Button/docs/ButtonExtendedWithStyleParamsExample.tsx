import * as React from 'react';
import { ButtonProps, Button } from '../Button';
import { classes } from './ButtonExtendedWithStyleParamsExample.st.css';
import { ReactComponent as Heart } from '../../../assets/icons/Heart.svg';
import { ReactComponent as Share } from '../../../assets/icons/Share.svg';
import { Text, TYPOGRAPHY } from '../../Text';

export const ButtonExtendedWithStyleParamsExample: React.FunctionComponent<ButtonProps> = (
  props,
) => (
  <div>
    <Text typography={TYPOGRAPHY.smallTitle}>Regular Button</Text>
    <Button upgrade {...props} className={classes.root}>
      Button
    </Button>
    <Text typography={TYPOGRAPHY.smallTitle}>Button with icons</Text>
    <Button
      upgrade
      {...props}
      prefixIcon={<Heart />}
      suffixIcon={<Share />}
      className={classes.root}
    >
      Button
    </Button>
  </div>
);
