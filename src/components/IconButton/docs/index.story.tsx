import * as React from 'react';
import { IconButton, Skins } from '../';
import {
  api,
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
import { allComponents } from '../../../../stories/utils/allComponents';

import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/Heart.svg';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as ExtendedRawSource from '!raw-loader!./IconButtonExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./IconButtonExtendedExample.st.css';
import { IconButtonExtendedExample } from './IconButtonExtendedExample';
import * as examples from './examples';
import { StoryCategory } from '../../../../stories/storyHierarchy';

ShareIcon.displayName = 'Share';
HeartIcon.displayName = 'Heart';

const iconExamples = [
  {
    label: 'Share',
    value: <ShareIcon />,
  },
  {
    label: 'Heart',
    value: <HeartIcon />,
  },
];

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'IconButton',
  component: IconButton,
  componentPath: '../IconButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-IconButton',
    icon: iconExamples[0].value,
    disabled: false,
    skin: Skins.Line,
  }),
  exampleProps: {
    icon: iconExamples,
    skin: Object.values(Skins),
  },
  dataHook: 'storybook-IconButton',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample({
            source: `import { IconButton } from 'wix-ui-tpa/IconButton';`,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Icon Button',
              description:
                'The IconButton component has different skins to apply',
              source: examples.basicExample,
            },
          ].map(example),
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
              title: 'Icon Button',
              example: <IconButtonExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Icon Color',
                    wixParam: 'iconColor',
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
