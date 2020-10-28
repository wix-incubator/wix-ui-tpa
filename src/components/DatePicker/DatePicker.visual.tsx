import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { DatePicker } from './';

visualize('DatePicker', () => {
  story('simple example', () => {
    snap(
      'default props',
      <DatePicker value={new Date()} onChange={() => {}} />,
    );
    snap(
      'custom buttonText',
      <DatePicker value={new Date()} onChange={() => {}} />,
    );
  });
});
