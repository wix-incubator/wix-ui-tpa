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
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import Examples from './extendedExamples';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

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
          importExample({
            source: `import { LikeButton } from 'wix-ui-tpa/LikeButton';`,
          }),

          divider(),

          title('Examples'),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
  examples: <Examples />,
};
