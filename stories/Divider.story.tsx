import * as React from 'react';
import {Divider} from '../src/components/Divider';
import * as DividerSource from '!raw-loader!../src/components/Divider/Divider.tsx';
import {Examples} from './Divider';

export default {
  category: 'Components',
  storyName: 'Divider',
  component: Divider,
  source: DividerSource,
  componentPath: '../src/components/Divider/Divider.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Divider',
  }),
  examples: (
    <Examples/>
  )
};
