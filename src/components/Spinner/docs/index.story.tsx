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
import * as SpinnerWiringExampleRaw from '!raw-loader!./SpinnerWiringExample.tsx';
import * as SpinnerWiringExampleCSSRaw from '!raw-loader!./SpinnerWiringExample.st.css';
import { SpinnerWiringExample } from './SpinnerWiringExample';
import { Spinner } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Spinner',
  component: Spinner,
  componentPath: '../Spinner.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Spinner',
  }),
  exampleProps: {},
  dataHook: 'storybook-Spinner',
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
            { title: 'Regular', source: examples.regular },
            { title: 'Slim', source: examples.slim },
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
              title: 'Spinner Panel',
              example: <SpinnerWiringExample />,
              rawSource: SpinnerWiringExampleRaw,
              rawCSSSource: SpinnerWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Path Color',
                    wixParam: 'pathColor',
                    defaultColor: 'color-5',
                  },
                ],
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
