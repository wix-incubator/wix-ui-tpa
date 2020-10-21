import * as React from 'react';
import { Badge, BADGE_PRIORITY } from '../';
import * as examples from './examples';
import {
  header,
  api,
  description,
  divider,
  importExample,
  playground,
  tab,
  example as baseExample,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as Readme from '../README.md';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { BadgeExtendedExample } from './BadgeExtendedExample';
import { classes as styledBadgeClasses } from './BadgeWithExtendedCSSVars.st.css';
import * as styledBadgeClassesRawSource from '!raw-loader!./BadgeWithExtendedCSSVars.st.css';
import * as ExtendedRawSource from '!raw-loader!./BadgeExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./BadgeExtendedExample.st.css';
console.log(styledBadgeClassesRawSource);

const example = config =>
  baseExample({
    components: {
      ...allComponents,
      styledBadgeClasses,
    },
    compact: true,
    ...config,
  });

export default {
  category: 'Components',
  storyName: 'Badge',
  component: Badge,
  componentPath: '../Badge.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Badge',
    children: 'Badge',
    priority: BADGE_PRIORITY.primary,
  }),
  exampleProps: {
    priority: Object.values(BADGE_PRIORITY),
  },
  dataHook: 'storybook-Badge',
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
            { title: 'Preset examples', source: examples.example },
            {
              title: 'CSS Vars inline overrides POC',
              description:
                'Customize the component with props and inline-styles CSS Vars',
              source: examples.inlineOverrides,
            },
            {
              title: 'CSS Vars stylesheet extend POC',
              description: `Customize the component with extending stylesheets with CSS Vars`,
              source: examples.stylesheetOverrides({
                rawCSS: (styledBadgeClassesRawSource as any).default,
              }),
            },
          ].map(example),
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
              example: <BadgeExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              title: 'Badge Extended',
              params: {
                colors: [
                  {
                    label: 'Badge background color',
                    wixParam: 'badgeBgColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Badge text color',
                    wixParam: 'badgeTextColor',
                    defaultColor: 'color-1',
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
