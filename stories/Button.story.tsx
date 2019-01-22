import * as React from 'react';
import {Button, PRIORITY, SIZE} from '../src/components/Button';
import * as ButtonSource from '!raw-loader!../src/components/Button/Button.tsx';
import {Examples} from './Button';

export default {
  category: 'Components',
  storyName: 'Button',
  component: Button,
  source: ButtonSource,
  componentPath: '../src/components/Button/Button.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Button',
    children: 'Book Now',
    priority: PRIORITY.basic,
    size: SIZE.medium
  }),
  exampleProps: {
    priority: Object.keys(PRIORITY).map(key => PRIORITY[key]),
    size: Object.keys(SIZE).map(key => SIZE[key]),
    children: 'sad'
  },
  examples: (
    <Examples/>
  )
};
