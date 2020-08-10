import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Spinner } from './';

visualize('Spinner', () => {
  story('simple', () => {
    snap('default props', <Spinner />);
    snap('custom buttonText', <Spinner buttonText={'Some custom text'} />);
  });
});
