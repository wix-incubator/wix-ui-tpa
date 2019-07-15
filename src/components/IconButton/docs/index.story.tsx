import * as React from 'react';
import { IconButton } from '../';
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
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';

import { ReactComponent as StarIcon } from '../../../assets/icons/Star.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/Heart.svg';

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
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: examples.example },
            { title: 'Mobile Example', source: examples.mobileExample },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
