import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { AddItem } from './';

visualize('AddItem', () => {
  story('simple', () => {
    snap('default props', <AddItem />);
    snap('custom buttonText', <AddItem buttonText={'Some custom text'} />);
  });
});
