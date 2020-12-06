import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';

import { DatePicker } from './';

visualize('DatePicker', () => {
  story('simple', () => {
    snap('default props', <DatePicker onChange={()=>{}} />);
  });
});
