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
import * as ProGalleryWiringExampleRaw from '!raw-loader!./ProGalleryWiringExample.tsx';
import * as ProGalleryWiringExampleCSSRaw from '!raw-loader!./ProGalleryWiringExample.st.css';
import { ProGalleryWiringExample } from './ProGalleryWiringExample';
import { ProGallery } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'ProGallery',
  component: ProGallery,
  componentPath: '../ProGallery.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ProGallery',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-ProGallery',
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
              title: 'ProGallery Panel',
              example: <ProGalleryWiringExample />,
              rawSource: ProGalleryWiringExampleRaw,
              rawCSSSource: ProGalleryWiringExampleCSSRaw,
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
