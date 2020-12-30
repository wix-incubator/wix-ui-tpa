import * as LikeButtonWiringExampleCSSRaw from '!raw-loader!./LikeButtonWiringExample.st.css';
import * as LikeButtonWiringExampleRaw from '!raw-loader!./LikeButtonWiringExample.tsx';
import * as React from 'react';
import {
  api,
  code as baseCode,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { LabelPlacement, LikeButton } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { LikeButtonWiringExample } from './LikeButtonWiringExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'LikeButton',
  component: LikeButton,
  componentPath: '../LikeButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-LikeButton',
    label: '0',
    labelPlacement: LabelPlacement.END,
    checked: false,
    disabled: false,
  }),
  exampleProps: {
    labelPlacement: Object.values(LabelPlacement),
  },
  dataHook: 'storybook-LikeButton',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`LikeButton` is a component allowing to render a like icon with label.',
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
          ].map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground(), autoSettingsPanel()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'LikeButton Panel',
              example: <LikeButtonWiringExample />,
              rawSource: LikeButtonWiringExampleRaw,
              rawCSSSource: LikeButtonWiringExampleCSSRaw,
              params: {
                fonts: [
                  {
                    label: 'Label Font',
                    wixParam: 'labelFont',
                    defaultFont: 'arial',
                  },
                ],
                colors: [
                  {
                    label: 'Icon Color',
                    wixParam: 'iconColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Label Color',
                    wixParam: 'labelColor',
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
