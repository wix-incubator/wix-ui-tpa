import * as React from 'react';
import { Input } from '..';
import { Examples } from './examples';

export default {
  category: 'Deprecated',
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
