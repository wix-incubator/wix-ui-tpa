import * as React from 'react';
import { IconButton } from '../';
import { Example } from './examples.tsx';
import {
  api,
  code as baseCode,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';

import { ReactComponent as StarIcon } from '../../../assets/icons/Star.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/Heart.svg';
import Examples from '../../IconToggle/docs/examples';

StarIcon.displayName = 'Star';
HeartIcon.displayName = 'Heart';

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

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'IconButton',
  component: IconButton,
  componentPath: '../IconButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-IconButton',
  }),
  exampleProps: {
    //
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
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
  examples: <Example />,
};
