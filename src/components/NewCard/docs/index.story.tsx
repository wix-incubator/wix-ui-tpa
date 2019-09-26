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
import * as NewCardWiringExampleRaw from '!raw-loader!./NewCardWiringExample.tsx';
import * as NewCardWiringExampleCSSRaw from '!raw-loader!./NewCardWiringExample.st.css';
import { NewCardWiringExample } from './NewCardWiringExample';
import { NewCard } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'NewCard',
  component: NewCard,
  componentPath: '../NewCard.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-NewCard',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-NewCard',
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
              title: 'NewCard Panel',
              example: <NewCardWiringExample />,
              rawSource: NewCardWiringExampleRaw,
              rawCSSSource: NewCardWiringExampleCSSRaw,
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
