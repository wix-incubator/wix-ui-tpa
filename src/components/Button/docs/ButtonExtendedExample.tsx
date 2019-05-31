import * as React from 'react';
import { ButtonProps, Button, PRIORITY } from '..';
import extendedStyles from './ButtonExtendedExample.st.css';

export const ButtonExtendedExample: React.FunctionComponent<
  ButtonProps
> = props => (
  <div>
    <Button {...props} {...extendedStyles('root', {}, props)}>
      BASIC
    </Button>

    <Button
      priority={PRIORITY.primary}
      {...props}
      {...extendedStyles('root', {}, props)}
    >
      PRIMARY
    </Button>

    <Button
      priority={PRIORITY.secondary}
      {...props}
      {...extendedStyles('root', {}, props)}
    >
      SECONDARY
    </Button>
  </div>
);
