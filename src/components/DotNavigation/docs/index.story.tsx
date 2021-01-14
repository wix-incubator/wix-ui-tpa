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
  tabs,
  testkit,
  title,
  description,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as ExtendedRawSource from '!raw-loader!./DotNavigationExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./DotNavigationExtendedExample.st.css';
import { DotNavigationExtendedExample } from './DotNavigationExtendedExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

export default {
  category: StoryCategory.COMPONENTS,
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
          description(
            'A dot navigation component. Usually used to show numbering in slideshows.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Default Example',
              description: 'By default the DotNavigation shows 5 dots',
              source: examples.example,
            },
            {
              title: 'Three Dot Example',
              description: 'The number of dots can be less than 5 though',
              source: examples.threeDotExamle,
            },
            {
              title: 'Ten Dot Example',
              description:
                'When there are more than 5 items, the DotNavigation shows a maximum of 5 dots, but with an indication that there are more to navigate to',
              source: examples.tenDotExamle,
            },
            {
              title: 'Light Example',
              description: 'The DotNavigation has a light theme',
              source: examples.lightExample,
            },
            {
              title: 'Light Example with Safety Border',
              description:
                'A "safety border" can be added to the dots, in case the background has a similar color as the dots',
              source: examples.lightExampleWithSafetyBorder,
            },
            {
              title: 'Default Example with currentIndex = 2',
              description:
                'The current selected index can be configured by a prop',
              source: examples.defaultExampleWithCurrentIndex,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
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
