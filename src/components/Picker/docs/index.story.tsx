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
import * as PickerWiringExampleRaw from '!raw-loader!./PickerWiringExample.tsx';
import * as PickerWiringExampleCSSRaw from '!raw-loader!./PickerWiringExample.st.css';
import { PickerWiringExample } from './PickerWiringExample';
import { Picker } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Picker',
  component: Picker,
  componentPath: '../Picker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Picker',
  }),
  exampleProps: {
    value: '',
  },
  dataHook: 'storybook-Picker',
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

          ...[{ title: 'Example', source: examples.example }].map(code),
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
              title: 'Picker Panel',
              example: <PickerWiringExample />,
              rawSource: PickerWiringExampleRaw,
              rawCSSSource: PickerWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Color',
                    wixParam: 'mainColor',
                    defaultColor: 'color-5',
                  },
                ],
                fonts: [
                  {
                    label: 'Font',
                    wixParam: 'fontStyle',
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
