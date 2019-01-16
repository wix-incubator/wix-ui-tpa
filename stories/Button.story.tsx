import * as React from 'react';
import {Button, PRIORITY} from '../src/components/Button';
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
  }),
  exampleProps: {
    priority: Object.keys(PRIORITY).map(key => PRIORITY[key]),
  },
  examples: (
    <Examples/>
  )
};
