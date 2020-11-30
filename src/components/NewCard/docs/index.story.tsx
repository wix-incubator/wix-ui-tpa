import * as React from 'react';
import { NewCardWiringExample } from './NewCardWiringExample';
import { NewCard } from '../';
import { StoryCategory } from '../../../../stories/storyHierarchy';

export default {
  category: StoryCategory.COMPONENTS,
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
