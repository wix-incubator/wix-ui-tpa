import * as React from 'react';
import * as examples from './examples';
import {
  header,
  api,
  description,
  divider,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { Dropdown } from '../';
import { DROPDOWN_ALIGNMENT } from '../Dropdown';
import {
  simpleOptions,
  numberOptions,
  optionsWithSections,
  optionsWithSubtitle,
} from '../helpers';
import { ReactComponent as Heart } from '../../../assets/icons/Heart.svg';
import * as Readme from '../../Dropdown/README.md';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const options = [
  {
    label: 'base options',
    value: simpleOptions,
  },
  {
    label: 'w. subtitle',
    value: optionsWithSubtitle,
  },
  {
    label: 'w. icon',
    value: simpleOptions.map(option => ({
      ...option,
      icon: <Heart />,
    })),
  },
  {
    label: 'w. icon & subtitle',
    value: optionsWithSubtitle.map(option => ({
      ...option,
      icon: <Heart />,
    })),
  },
  {
    label: 'w. sections',
    value: optionsWithSections,
  },
  {
    label: 'numbers',
    value: numberOptions,
  },
];

export default {
  category: 'Components',
  storyName: 'Dropdown',
  component: Dropdown,
  componentPath: '../Dropdown.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Dropdown',
    placeholder: 'Placeholder Text',
    options: simpleOptions,
  }),
  exampleProps: {
    placement: ['auto', 'top', 'right', 'bottom', 'left'],
    label: '',
    disabled: false,
    error: false,
    alignment: Object.values(DROPDOWN_ALIGNMENT),
    errorMessage: '',
    options,
    initialSelectedId: '',
    onChange: option => console.log(option),
  },
  dataHook: 'storybook-Dropdown',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '**ATTENTION: The current API for this component will be deprecated on the next major version.<br>' +
              'Please use the new API using the `upgrade` prop.<br>**',
          ),

          description(Readme),

          divider(),

          title('Examples'),

          ...[
            { title: 'Simple', source: examples.simpleExample },
            { title: 'Native', source: examples.simpleNativeExample },
            { title: 'Disabled', source: examples.disabledExample },
            { title: 'w. label', source: examples.withLabelExample },
            { title: 'Centered', source: examples.alignmentExample },
            { title: 'Error', source: examples.errorExample },
            {
              title: 'Error with message',
              source: examples.errorWithMessageExample,
            },
            {
              title: 'w. subtitles (max 2 lines)',
              source: examples.withSubtitlesExample,
            },
            { title: 'Section title', source: examples.sectionTitleExample },
            { title: 'w. icons', source: examples.withIconsExample },
            {
              title: 'w. icons + subtitles',
              source: examples.withIconsAndSubtitlesExample,
            },
            { title: 'Min Width', source: examples.minWidthExample },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
