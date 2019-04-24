import * as React from 'react';
import { {%ComponentName%} } from '../src/components/{%ComponentName%}';
import * as {%ComponentName%}Source from '!raw-loader!../src/components/{%ComponentName%}/{%ComponentName%}.tsx';
import { Examples } from './{%ComponentName%}';

export default {
  category: 'Components',
  storyName: '{%ComponentName%}',
  component: {%ComponentName%},
  source: {%ComponentName%}Source,
  componentPath: '../src/components/{%ComponentName%}/{%ComponentName%}.tsx',
  componentProps: (setState, getState) => ({
    'data-hook': 'storybook-{%ComponentName%}',
    value: '',
    onChange: ({target: {value}}) => setState({value})
  }),
  examples: (
    <Examples/>
  )
};
