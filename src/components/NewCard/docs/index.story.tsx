import * as React from 'react';
import { NewCard } from '../';
import { NewCardExample } from './NewCardExample';

export default {
  category: 'Components',
  storyName: 'NewCard',
  component: NewCard,
  componentPath: '../NewCard.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-NewCard',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-NewCard',
  examples: <NewCardExample />,
};
