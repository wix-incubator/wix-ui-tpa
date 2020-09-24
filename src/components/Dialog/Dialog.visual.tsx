import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Dialog } from './';

visualize('Dialog', () => {
  story('simple', () => {
    snap('default props', <Dialog />);
    // snap('custom buttonText', <Dialog buttonText={'Some custom text'} />);
  });
});
