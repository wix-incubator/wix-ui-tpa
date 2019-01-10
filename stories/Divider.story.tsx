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
    // children: 'Some text',
    // typography: TYPOGRAPHY.runningText,
  }),
  exampleProps: {
    // typography: Object.keys(TYPOGRAPHY).map(key => TYPOGRAPHY[key]),
  },
  examples: (
    <Examples/>
  )
};
