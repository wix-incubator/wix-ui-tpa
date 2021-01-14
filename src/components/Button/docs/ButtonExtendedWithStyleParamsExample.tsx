import * as React from 'react';
import { Button, ButtonProps, SIZE } from '../Button';
import { classes, st } from './ButtonExtendedWithStyleParamsExample.st.css';
import { ReactComponent as Heart } from '../../../assets/icons/Heart.svg';
import { ReactComponent as Share } from '../../../assets/icons/Share.svg';

export const ButtonExtendedWithStyleParamsExample: React.FunctionComponent<ButtonProps> = (
  props,
) => (
  <div className={st(classes.root)}>
    <div>
      <Button upgrade {...props} className={classes.btn} size={SIZE.tiny}>
        Button
      </Button>
    </div>
    <div>
      <Button upgrade {...props} className={classes.btn} size={SIZE.small}>
        Button
      </Button>
    </div>
    <div>
      <Button upgrade {...props} className={classes.btn} size={SIZE.medium}>
        Button
      </Button>
    </div>
    <div>
      <Button upgrade {...props} className={classes.btn} size={SIZE.large}>
        Button
      </Button>
    </div>

    <div>
      <Button
        prefixIcon={<Heart />}
        suffixIcon={<Share />}
        upgrade
        {...props}
        className={classes.btn}
        size={SIZE.tiny}
      >
        Button
      </Button>
    </div>
    <div>
      <Button
        prefixIcon={<Heart />}
        suffixIcon={<Share />}
        upgrade
        {...props}
        className={classes.btn}
        size={SIZE.small}
      >
        Button
      </Button>
    </div>
    <div>
      <Button
        prefixIcon={<Heart />}
        suffixIcon={<Share />}
        upgrade
        {...props}
        className={classes.btn}
        size={SIZE.medium}
      >
        Button
      </Button>
    </div>
    <div>
      <Button
        prefixIcon={<Heart />}
        suffixIcon={<Share />}
        upgrade
        {...props}
        className={classes.btn}
        size={SIZE.large}
      >
        Button
      </Button>
    </div>
  </div>
);
