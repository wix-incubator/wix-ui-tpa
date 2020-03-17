import * as React from 'react';
import { ButtonProps, Button, PRIORITY } from '..';
import extendedStyles from './ButtonExtendedExample.st.css';

export const ButtonExtendedExample: React.FunctionComponent<ButtonProps> = props => (
  <div>
    <Button upgrade {...props} {...extendedStyles('root', {}, props)}>
      BASIC
    </Button>

    <Button
      upgrade
      priority={PRIORITY.basicSecondary}
      {...props}
      {...extendedStyles('root', {}, props)}
    >
      BASIC SECONDARY
    </Button>

    <Button
      upgrade
      priority={PRIORITY.primary}
      {...props}
      {...extendedStyles('root', {}, props)}
    >
      PRIMARY
    </Button>

    <Button
      upgrade
      priority={PRIORITY.secondary}
      {...props}
      {...extendedStyles('root', {}, props)}
    >
      SECONDARY
    </Button>
  </div>
);
