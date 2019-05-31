import * as React from 'react';
import { Button, PRIORITY, SIZE } from '..';
import { Examples } from './examples';

export default {
  category: 'Components',
  storyName: 'Button',
  component: Button,
  componentPath: '../Button.tsx',

  componentProps: {
    'data-hook': 'storybook-Button',
    children: 'Book Now',
    priority: PRIORITY.basic,
    size: SIZE.medium,
    fullWidth: false,
  },
  exampleProps: {
    priority: Object.keys(PRIORITY).map(key => PRIORITY[key]),
    size: Object.keys(SIZE).map(key => SIZE[key]),
  },
  examples: <Examples />,
};
