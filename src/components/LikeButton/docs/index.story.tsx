import * as React from 'react';
import { LikeButton } from '..';
import { Examples } from './examples';

export default {
  category: 'Components',
  storyName: 'LikeButton',

  component: LikeButton,
  componentPath: '../LikeButton.tsx',

  componentProps: (setState, getState) => ({
    'data-hook': 'storybook-LikeButton',
    value: '',
    onChange: ({ target: { value } }) => setState({ value }),
  }),

  examples: <Examples />,
};
