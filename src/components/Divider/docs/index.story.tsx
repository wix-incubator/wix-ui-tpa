import * as React from 'react';
import {
  description,
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  example as baseExample,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { Divider } from '../Divider';
import * as examples from './examples';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { DividerExtendedExample } from './DividerExtendedExample.tsx';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as ExtendedRawSource from '!raw-loader!./DividerExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./DividerExtendedExample.st.css';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Divider',

  component: Divider,
  componentPath: '../Divider.tsx',

  componentProps: {
    'data-hook': 'storybook-Divider',
  },
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'Divider is a component helping to separate elements into sections',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Default Divider',
              description: 'Receives parent width',
              source: examples.defaultExample,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground(), autoSettingsPanel()] },
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
              example: <DividerExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              title: 'Divider Extended',
              params: {
                colors: [
                  {
                    label: 'Line color',
                    wixParam: 'dividerColor',
                    defaultColor: 'color-5',
                  },
                ],
                numbers: [
                  {
                    label: 'Divider width',
                    wixParam: 'dividerWidth',
                    defaultNumber: 1,
                    min: 1,
                    max: 10,
                    unit: 'px',
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
