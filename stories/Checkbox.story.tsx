import * as React from 'react';
import {Checkbox} from '../src/components/Checkbox';
import * as CheckboxSource from '!raw-loader!../src/components/Checkbox/Checkbox.tsx';
import {Examples} from './Checkbox';

export default {
  category: 'Components',
  storyName: 'Checkbox',
  component: Checkbox,
  source: CheckboxSource,
  componentPath: '../src/components/Checkbox/Checkbox.tsx',
  componentProps: (setState, getState) => ({
    'data-hook': 'storybook-Checkbox',
    onChange: ({target: {checked}}) => setState({checked}),
    checked: true,
    labelText: 'Checkbox label text',
    error: true,
    errorMessage: 'Checkbox is required'
  }),
  examples: (
    <Examples/>
  )
};
