import * as React from 'react';
import { Input } from '..';
import { Examples } from './examples';
import { StoryCategory } from '../../../../stories/storyHierarchy';

export default {
  category: StoryCategory.DEPRECATED,
  storyName: 'Input',

  component: Input,
  componentPath: '../Input.tsx',

  componentProps: (setState, getState) => ({
    'data-hook': 'storybook-Input',
    value: '',
    onChange: ({ target: { value } }) => setState({ value }),
  }),

  examples: <Examples />,
};
