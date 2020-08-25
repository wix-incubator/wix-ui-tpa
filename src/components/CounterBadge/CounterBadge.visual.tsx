import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { CounterBadge } from './';

visualize('CounterBadge', () => {
  story('simple example', () => {
    snap('default props', <CounterBadge />);
    snap('custom buttonText', <CounterBadge buttonText={'Some custom text'} />);
  });
});
