import * as React from 'react';
import * as examples from './examples';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as DropdownWiringExampleRaw from '!raw-loader!./DropdownWiringExample.tsx';
import * as DropdownWiringExampleCSSRaw from '!raw-loader!./DropdownWiringExample.st.css';
import { DropdownWiringExample } from './DropdownWiringExample';
import { Dropdown } from '../';
import { DROPDOWN_ALIGNMENT } from '../Dropdown';
import {
  baseOptions,
  numberOptions,
  optionsWithIcon,
  optionsWithIconAndSubtitles,
  optionsWithSections,
  optionsWithSubtitle,
} from './exampleOptions';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const options = [
  {
    label: 'base options',
    value: baseOptions,
  },
  {
    label: 'w. subtitle',
    value: optionsWithSubtitle,
  },
  {
    label: 'w. icon',
    value: optionsWithIcon,
  },
  {
    label: 'w. icon & subtitle',
    value: optionsWithIconAndSubtitles,
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
    options: baseOptions,
  }),
  exampleProps: {
    label: '',
    disabled: false,
    error: false,
    alignment: Object.values(DROPDOWN_ALIGNMENT),
    errorMessage: '',
    options,
    initialSelectedId: '',
  },
  dataHook: 'storybook-Dropdown',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: examples.example },
            { title: 'Disabled', source: examples.disabledExample },
            { title: 'w. label', source: examples.withLabelExample },
            { title: 'Centered', source: examples.alignmentExample },
            { title: 'Error', source: examples.errorExample },
            {
              title: 'Error with message',
              source: examples.errorWithMessageExample,
            },
            { title: 'w. subtitles', source: examples.withSubtitlesExample },
            { title: 'Section title', source: examples.sectionTitleExample },
            { title: 'w. icons', source: examples.withIconsExample },
            { title: 'Min Width', source: examples.minWidthExample },
            {
              title: 'w. icons + subtitles',
              source: examples.withIconsAndSubtitlesExample,
            },
            // { title: 'Mobile Example', source: examples.mobileExample },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Dropdown Panel',
              example: <DropdownWiringExample />,
              rawSource: DropdownWiringExampleRaw,
              rawCSSSource: DropdownWiringExampleCSSRaw,
              params: {
                colors: [],
                fonts: [],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
