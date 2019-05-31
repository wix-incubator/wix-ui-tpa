import * as React from 'react';
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
import { Button } from '../../Button';
import { Text, TYPOGRAPHY } from '../../Text';
import { Card, CardRatioOptions } from '../';
import * as examples from './examples';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const mediaExamples = [
  {
    label: 'image',
    value: (
      <div
        style={{
          background:
            'url("https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_550,h_380,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg") no-repeat center center',
          height: '100%',
          backgroundSize: 'cover',
        }}
      />
    ),
  },
  { label: 'video', value: <video src="" /> },
  { label: 'none', value: null },
];

const infoExample = (
  <div>
    <Text typography={TYPOGRAPHY.largeTitle}>BIG TITLE WITH LINE BREAKING</Text>
    <div style={{ marginTop: '24px' }}>
      <Button>button</Button>
    </div>
  </div>
);

export default {
  category: 'Components',
  storyName: 'Card',
  component: Card,
  componentPath: '../Card.tsx',

  componentProps: {
    media: mediaExamples[0].value,
    info: infoExample,
    'data-hook': 'storybook-Card',
    flippedRatio: false,
    invertInfoPosition: false,
    stacked: false,
  },

  exampleProps: {
    media: mediaExamples,
    ratio: Object.keys(CardRatioOptions).map(key => CardRatioOptions[key]),
  },

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample(
            "import {Card} from 'wix-ui-tpa/dist/src/components/Card';",
          ),

          divider(),

          title('Examples'),

          ...[
            { title: 'Side By Side', source: examples.sideBySide },
            { title: 'Stacked', source: examples.stacked },
            { title: 'Stacked On Mobile', source: examples.stackedMobile },
            { title: 'Ratios', source: examples.ratio },
            { title: 'Flipped Ratios', source: examples.flippedRatio },
            {
              title: 'Invert Content Position',
              source: examples.invertPosition,
            },
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
