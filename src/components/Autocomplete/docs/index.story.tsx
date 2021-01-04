import * as React from 'react';
import { Option } from 'wix-ui-core/dropdown-option';

import { Autocomplete } from '../Autocomplete';
import { generateOptions } from 'wix-ui-core/dist/src/components/dropdown-option/OptionsExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const options = generateOptions();

export default {
  category: StoryCategory.DEPRECATED,
  storyName: 'Autocomplete',

  component: Autocomplete,
  componentPath: '../Autocomplete.tsx',

  componentProps: {
    'data-hook': 'storybook-autocomplete',
    options,
  },

  exampleProps: {
    fixedHeader: [
      { label: '<div>Fixed Header</div>', value: <div>Fixed Header</div> },
    ],
    fixedFooter: [
      { label: '<div>Fixed Footer</div>', value: <div>Fixed Footer</div> },
    ],
    onSelect: (option: Option) => option.value,
    initialSelectedId: [1, 3, 7],
    options: [
      {
        label: '20 Dummy options',
        value: options,
      },
    ],
    onManualInput: (value: string) => `Manual input: ${value}`,
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onChange: (evt) => evt.target.value,
  },
};
