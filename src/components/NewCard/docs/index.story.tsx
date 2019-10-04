import * as React from 'react';
import { NewCardWiringExample } from './NewCardWiringExample';
import { NewCard } from '../';

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
  examples: <NewCardWiringExample />,
};
