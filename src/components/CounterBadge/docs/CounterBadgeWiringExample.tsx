import * as React from 'react';
import { CounterBadge, CounterBadgeTheme } from '../CounterBadge';
import { st, classes } from './CounterBadgeWiringExample.st.css';

export const CounterBadgeWiringExample = () => {
  return (
    <>
      <CounterBadge
        className={st(classes.root)}
        theme={CounterBadgeTheme.Primary}
      >
        56
      </CounterBadge>
      <br />
      <br />
      <CounterBadge
        className={st(classes.root)}
        theme={CounterBadgeTheme.Secondary}
      >
        56
      </CounterBadge>
    </>
  );
};
