import * as React from 'react';
import { IconToggle, LabelPlacement } from '../';
import Examples from './examples.tsx';
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
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { ReactComponent as StarIcon } from '../../../assets/icons/Star.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/Heart.svg';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { IconToggleExtendedExample } from './IconToggleExtendedExample';
import * as ExtendedRawSource from '!raw-loader!./IconToggleExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./IconToggleExtendedExample.st.css';
import * as examples from './examples';
import { allComponents } from '../../../../stories/utils/allComponents';
import { StoryCategory } from '../../../../stories/storyHierarchy';

StarIcon.displayName = 'Star';
HeartIcon.displayName = 'Heart';

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

const iconExamples = [
  {
    label: 'Star',
    value: <StarIcon />,
  },
  {
    label: 'Heart',
    value: <HeartIcon />,
  },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'IconToggle',
  component: IconToggle,
  componentPath: '../IconToggle.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-IconToggle',
    icon: iconExamples[0].value,
    label: '0',
    labelPlacement: LabelPlacement.END,
    checked: false,
    disabled: false,
  }),
  exampleProps: {
    icon: iconExamples,
    labelPlacement: Object.values(LabelPlacement),
  },
  dataHook: 'storybook-IconToggle',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description('A toggle button represented by an icon and label'),

          importExample({
            source: `import { IconToggle } from 'wix-ui-tpa/IconToggle';`,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Basic Example',
              description: 'Star toggle with counter',
              source: examples.counter,
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
              example: <IconToggleExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              title: 'IconToggle Extended',
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
