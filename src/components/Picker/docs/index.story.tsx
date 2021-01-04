import * as PickerWiringExampleCSSRaw from '!raw-loader!./PickerWiringExample.st.css';
import * as PickerWiringExampleRaw from '!raw-loader!./PickerWiringExample.tsx';
import * as React from 'react';
import {
  api,
  code as baseCode,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { Picker } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { PickerWiringExample } from './PickerWiringExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
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
          description(
            '`Picker` is a component allowing to navigate between sections showing the current section you are on. Mostly used for months or years.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[{ title: 'Example', source: examples.example }].map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground(), autoSettingsPanel()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
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
