import * as React from 'react';
import * as TextWiringExampleCSSRaw from '!raw-loader!./TextWiringExample.st.css';
import * as TextWiringExampleRaw from '!raw-loader!./TextWiringExample.tsx';
import {
  api,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import { Text, TYPOGRAPHY, TEXT_PRIORITY } from '..';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { TextWiringExample } from './TextWiringExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const example = (config) =>
  baseExample({
    components: allComponents,
    ...config,
  });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Text',

  component: Text,
  componentPath: '../Text.tsx',

  componentProps: {
    'data-hook': 'storybook-Text',
    children: 'Some text',
    typography: TYPOGRAPHY.runningText,
  },
  exampleProps: {
    typography: [
      {
        label: `${TYPOGRAPHY.largeTitle} - 32px`,
        value: TYPOGRAPHY.largeTitle,
      },
      {
        label: `${TYPOGRAPHY.smallTitle} - 24px`,
        value: TYPOGRAPHY.smallTitle,
      },
      { label: `${TYPOGRAPHY.listText} - 16px`, value: TYPOGRAPHY.listText },
      {
        label: `${TYPOGRAPHY.runningText} - 16px`,
        value: TYPOGRAPHY.runningText,
      },
    ],
    priority: Object.keys(TEXT_PRIORITY).map((key) => TEXT_PRIORITY[key]),
  },
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`Text` is a component allowing to render a custom text.',
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
            {
              title: 'Priority',
              text:
                'The priority defines the text color. There are 2 possible values:  `primary`, `secondary`. The default value is `primary `',
              source: examples.priority,
            },
          ].map(example),
        ],
      }),

      ...[
        {
          title: 'Playground',
          sections: [playground(), autoSettingsPanel()],
        },
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Text Panel',
              example: <TextWiringExample />,
              rawSource: TextWiringExampleRaw,
              rawCSSSource: TextWiringExampleCSSRaw,
              params: {
                fonts: [
                  {
                    label: 'Font',
                    wixParam: 'textFont',
                    defaultFont: 'arial',
                  },
                ],
                colors: [
                  {
                    label: 'Text color',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
                  },
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
