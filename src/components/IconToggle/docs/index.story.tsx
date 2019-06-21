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
} from 'wix-storybook-utils/Sections';
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

export default {
  category: 'Components',
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
          importExample({
            source: `import { IconToggle } from 'wix-ui-tpa/IconToggle';`,
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
