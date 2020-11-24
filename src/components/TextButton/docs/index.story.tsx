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
import { TextButton, TEXT_BUTTON_PRIORITY } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as examples from './examples';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'TextButton',
  component: TextButton,
  componentPath: '../TextButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-TextButton',
    children: 'Text Button',
    priority: TEXT_BUTTON_PRIORITY.link,
  }),
  exampleProps: {
    priority: Object.values(TEXT_BUTTON_PRIORITY),
  },
  dataHook: 'storybook-TextButton',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`TextButton` is a component allowing to render a custom text functioning as a button.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Basic Usage',
              source: examples.basic,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
