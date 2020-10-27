import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { ProgressBar } from './';

visualize('ProgressBar', () => {
  story('simple example', () => {
    snap('default props', <ProgressBar />);
    snap('custom buttonText', <ProgressBar buttonText={'Some custom text'} />);
  });
});
