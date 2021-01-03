import * as React from 'react';

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
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import { SimpleDatePicker } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'SimpleDatePicker',
  component: storyComponent(SimpleDatePicker),
  componentPath: '../SimpleDatePicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-SimpleDatePicker',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-SimpleDatePicker',
  sections: [
    header({
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          // importExample({
          //   source: `import { SimpleDatePicker } from 'wix-ui-tpa/SimpleDatePicker';`,
          // }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: `<SimpleDatePicker />` },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
