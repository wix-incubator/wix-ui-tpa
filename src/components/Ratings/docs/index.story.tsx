import * as React from 'react';
import { Ratings, Mode, Size, Layout } from '..';
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
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as ExtendedRawSource from '!raw-loader!./RatingsExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./RatingsExtendedExample.st.css';
import { RatingsExtendedExample } from './RatingsExtendedExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Ratings',
  component: Ratings,
  componentPath: '../Ratings.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Ratings',
  }),
  exampleProps: {
    mode: Object.values(Mode),
    size: Object.values(Size),
    layout: Object.values(Layout),
    inputOptions: [
      { value: [], label: 'no hovers' },
      {
        value: ['Very Baasa', 'Baasa', 'OK', 'Achla', 'Very Achla'],
        label: 'with hovers',
      },
    ],
  },
  dataHook: 'storybook-Ratings',
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

          ...[{ title: 'mode="input"', source: examples.defult }].map(code),
          ...[
            {
              title: 'mode="input" with inputOptions',
              source: examples.inputWithValue,
            },
          ].map(code),
          ...[{ title: 'mode="display"', source: examples.defaultDisplay }].map(
            code,
          ),
          ...[
            {
              title: 'mode="display" with labels',
              source: examples.displayWithLables,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Settings Panel',
              example: <RatingsExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Icon Color',
                    wixParam: 'iconColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Icon Empty Color',
                    wixParam: 'iconEmptyColor',
                    defaultColor: 'color-3',
                  },
                  {
                    label: 'Text Color',
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
