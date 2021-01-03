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
import { ThemedDatePicker } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'ThemedDatePicker',
  component: storyComponent(ThemedDatePicker),
  componentPath: '../ThemedDatePicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ThemedDatePicker',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-ThemedDatePicker',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: `import { ThemedDatePicker } from 'wix-ui-tpa/ThemedDatePicker';`,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: `<ThemedDatePicker />` },
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
        { title: 'Settings Panel', sections: [] },
      ].map(tab),
    ]),
  ],
};
