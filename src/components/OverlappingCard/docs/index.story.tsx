import * as React from 'react';

import {
  header,
  api,
  divider,
  description,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';

import { settingsApi } from '../../../../stories/utils/SettingsApi';
import Examples from './exampleWithSettingPanel';
import { OverlappingCard, OverlappingCardRatioOptions } from '../';
import { Button } from '../../Button';
import { Text, TYPOGRAPHY } from '../../Text';
import readme from '../README.md';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const mediaExamples = [
  {
    label: 'image',
    value: (
      <div
        style={{
          background:
            'url("https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_452,h_316,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg") no-repeat center center',
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
  category: StoryCategory.BOOKINGS,
  storyName: 'OverlappingCard',
  component: OverlappingCard,
  componentPath: '../OverlappingCard.tsx',
  componentProps: {
    media: mediaExamples[0].value,
    info: infoExample,
    'data-hook': 'storybook-OverlappingCard',
  },
  exampleProps: {
    media: mediaExamples,
    ratio: Object.keys(OverlappingCardRatioOptions).map(
      (key) => OverlappingCardRatioOptions[key],
    ),
  },

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '**ATTENTION: The current API for this component will be deprecated on the next major version.<br>' +
              'Please use the new API using the `upgrade` prop.<br>' +
              'Refer to `<NewCard/>` documentation for the new API.**',
          ),
          importExample(
            "import {OverlappingCard} from 'wix-ui-tpa/OverlappingCard'",
          ),

          description(readme),

          divider(),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],

  examples: <Examples />,
};
