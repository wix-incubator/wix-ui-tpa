import * as React from 'react';
import { Rating } from '../';
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
import * as ExtendedRawSource from '!raw-loader!./RatingExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./RatingExtendedExample.st.css';
import { RatingExtendedExample } from './RatingExtendedExample';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Rating',
  component: Rating,
  componentPath: '../Rating.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Rating',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-Rating',
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
              example: <RatingExtendedExample />,
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
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
