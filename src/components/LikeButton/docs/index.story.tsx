import * as React from 'react';
import { LikeButton, LabelPlacement } from '../';
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
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as examples from './examples';

const code = (config) => baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
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
          description('`LikeButton` is a component allowing to render a like icon with label.'),

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
        { title: 'Playground', sections: [playground()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
