import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { {%ComponentName%} } from './';

visualize('{%ComponentName%}', () => {
  story('simple example', () => {
    snap('default props', <{%ComponentName%} />);
    snap('custom buttonText', <{%ComponentName%} buttonText={'Some custom text'} />);
  });
});
