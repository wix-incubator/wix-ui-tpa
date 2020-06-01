import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Popover } from './';

visualize('Popover', () => {
  story('render', () => {
    snap('default', <Popover />);
    snap('right to left',<Popover rightToLeft />);
  });
});
