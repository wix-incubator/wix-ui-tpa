import * as React from 'react';
import { DotNavigation, Theme } from '../DotNavigation';
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
  description,
} from 'wix-storybook-utils/Sections';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as ExtendedRawSource from '!raw-loader!./DotNavigationExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./DotNavigationExtendedExample.st.css';
import { DotNavigationExtendedExample } from './DotNavigationExtendedExample';
import * as Readme from '../README.md';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'DotNavigation',
  component: DotNavigation,
  componentPath: '../DotNavigation.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-DotNavigation',
    onSelect: (index: number) => console.log(index),
  }),
  exampleProps: {
    theme: Object.values(Theme),
    onSelect: [],
  },
  dataHook: 'storybook-DotNavigation',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(Readme),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Default Example', source: examples.example },
            { title: 'Three Dot Example', source: examples.threeDotExamle },
            {
              title: 'Ten Dot Example',
              source: examples.tenDotExamle,
            },
            { title: 'Light Example', source: examples.lightExample },
            {
              title: 'Light Example with Safety Border',
              source: examples.lightExampleWithSafetyBorder,
            },
            {
              title: 'Default Example with currentIndex = 2',
              source: examples.defaultExampleWithCurrentIndex,
            },
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
              example: (
                <DotNavigationExtendedExample
                  length={10}
                  showBorder
                  theme={Theme.Light}
                />
              ),
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              title: 'DotNavigation',
              params: {
                colors: [
                  {
                    label: 'Selected Dot Color',
                    wixParam: 'selectedDotColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Selected Border Color',
                    wixParam: 'selectedBorderColor',
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
