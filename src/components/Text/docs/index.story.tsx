import * as React from 'react';

import { Text, TYPOGRAPHY } from '..';
import { Examples } from './examples';

export default {
  category: 'Components',
  storyName: 'Text',

  component: Text,
  componentPath: '../Text.tsx',

  componentProps: {
    'data-hook': 'storybook-Text',
    children: 'Some text',
    typography: TYPOGRAPHY.runningText,
  },
  exampleProps: {
    typography: Object.keys(TYPOGRAPHY).map(key => TYPOGRAPHY[key]),
  },
  examples: <Examples />,
};
