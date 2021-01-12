import * as React from 'react';
import { st, classes } from './ButtonWiringExample.st.css';
import { Button, ButtonProps, SIZE } from '../Button';
import { ReactComponent as Heart } from '../../../assets/icons/Heart.svg';
import { ReactComponent as Share } from '../../../assets/icons/Share.svg';

export const ButtonWiringExample: React.FunctionComponent<ButtonProps> = (
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
