import * as React from 'react';
import { Divider } from '../Divider';
import { Examples } from './examples';

export default {
  category: 'Components',
  storyName: 'Divider',

  component: Divider,
  componentPath: '../Divider.tsx',

  componentProps: {
    'data-hook': 'storybook-Divider',
  },

  examples: <Examples />,
};
