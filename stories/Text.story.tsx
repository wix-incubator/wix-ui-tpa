import * as React from 'react';
import {Text, TYPOGRAPHY} from '../src/components/Text';
import * as TextSource from '!raw-loader!../src/components/Text/Text.tsx';
import {Examples} from './Text';

export default {
  category: 'Components',
  storyName: 'Text',
  component: Text,
  source: TextSource,
  componentPath: '../src/components/Text/Text.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Text',
    children: 'Some text',
    typography: TYPOGRAPHY.runningText,
  }),
  exampleProps: {
    typography: Object.keys(TYPOGRAPHY).map(key => TYPOGRAPHY[key]),
  },
  examples: (
    <Examples/>
  )
};
