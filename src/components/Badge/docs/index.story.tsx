import * as React from 'react';
import { Badge, BADGE_PRIORITY } from '../';
import * as examples from './examples';
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
import { allComponents } from '../../../../stories/utils/allComponents';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';

import { BadgeExtendedExample } from './BadgeExtendedExample';
import * as exampleOverrides from './BadgeExtendedExample.st.css';
import * as ExtendedRawSource from '!raw-loader!./BadgeExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./BadgeExtendedExample.st.css';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

export default {
  category: StoryCategory.COMPONENTS,
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
          description('Badge component is used to display a special content.'),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Priority skins',
              description: 'The Badge component has different skins to apply',
              source: examples.priority,
            },
            {
              title: 'Icon prefix',
              description: 'Icon prefix can be set per icon',
              source: examples.icons,
            },
            {
              title: 'RTL support',
              description: 'RTL is supported using the native css property',
              source: examples.rtl,
            },
          ].map(example),
          example(
            {
              title: 'Style params override',
              description:
                'Override specific style variables to customize the component. Go to the "Settings Panel" and start changing colors, see how it reflects this one as well',
              source: `() => {
  \`
//MyComponent.st.css
${(ExtendedCSSRawSource as any).default}\`

return (
  <>
    <Badge className={classes.mixPriorityLight}>Badge</Badge>
    <Badge className={classes.mixPriorityPrimary}>Badge</Badge>
  </>
  );
}
`,
            },
            { classes: exampleOverrides.classes },
          ),
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
