import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { ActionsMenu } from './';

visualize('ActionsMenu', () => {
  story('simple', () => {
    snap('default props', <ActionsMenu />);
    snap('custom buttonText', <ActionsMenu buttonText={'Some custom text'} />);
  });
});
