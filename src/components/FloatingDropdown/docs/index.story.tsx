import * as React from 'react';
import * as examples from './examples';
import {
  api,
  code as baseCode,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as FloatingDropdownWiringExampleRaw from '!raw-loader!./FloatingDropdownWiringExample.tsx';
import * as FloatingDropdownWiringExampleCSSRaw from '!raw-loader!./FloatingDropdownWiringExample.st.css';
import { FloatingDropdownWiringExample } from './FloatingDropdownWiringExample';
import { FloatingDropdown } from '../';
import { getFloatingDropdownTestProps } from '../test-props';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const exampleProps = getFloatingDropdownTestProps() as any;
exampleProps.options = [
  { value: exampleProps.options, label: 'simple example' },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'FloatingDropdown',
  component: FloatingDropdown,
  componentPath: '../FloatingDropdown.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-FloatingDropdown',
    ...exampleProps,
    options: exampleProps.options[0].value,
  }),
  exampleProps: {
    options: exampleProps.options,
  },
  dataHook: 'storybook-FloatingDropdown',
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
            { title: 'Preselected', source: examples.preselected },
            { title: 'MinWidth', source: examples.minWidth },
            { title: 'MaxWidth', source: examples.maxWidth },
            { title: 'Disabled', source: examples.disabled },
            { title: 'Ellipsis', source: examples.ellipsis },
            { title: 'Block Display', source: examples.displayBlock },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'FloatingDropdown Panel',
              example: <FloatingDropdownWiringExample />,
              rawSource: FloatingDropdownWiringExampleRaw,
              rawCSSSource: FloatingDropdownWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Button Text Color',
                    wixParam: 'ButtonTextColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Item Text Color',
                    wixParam: 'ItemTextColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Dropdown Background Color',
                    wixParam: 'DropdownBackgroundColor',
                    defaultColor: 'color-1',
                  },
                ],
                fonts: [
                  {
                    label: 'Text Font',
                    wixParam: 'TextFont',
                    defaultFont: 'arial',
                  },
                ],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
