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

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Dropdown',
  component: Dropdown,
  componentPath: '../Dropdown.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Dropdown',
    placeholder: 'Placeholder Text',
    disabled: false,
    error: false,
    errorMessage: '',
  }),
  exampleProps: {
    //
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
            { title: 'Error', source: examples.errorExample },
            {
              title: 'Error with message',
              source: examples.errorWithMessageExample,
            },
            { title: 'w. label', source: examples.withLabelExample },
            { title: 'w. subtitles', source: examples.withSubtitlesExample },
            { title: 'Section title', source: examples.sectionTitleExample },
            { title: 'w. icons', source: examples.withIconsExample },
            { title: 'Min Width', source: examples.minWidthExample },
            {
              title: 'w. icons + subtitles',
              source: examples.withIconsAndSubtitlesExample,
            },
            { title: 'Mobile Example', source: examples.mobileExample },
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
