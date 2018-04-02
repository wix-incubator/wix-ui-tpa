import * as React from 'react';
import {Input} from '../src/components/Input';
import * as InputSource from '!raw-loader!../src/components/Input/Input.tsx';
import {Examples} from './Input';

export default {
  category: 'Components',
  storyName: 'Input',
  component: Input,
  source: InputSource,
  componentPath: '../src/components/Input/Input.tsx',
  componentProps: (setState, getState) => ({
    'data-hook': 'storybook-Input',
    value: '',
    onChange: ({target: {value}}) => setState({value}),
  }),
  examples: (
    <Examples/>
  )
};
