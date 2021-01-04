import * as React from 'react';
import { StripCard } from '../';
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
  description,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { Text, TYPOGRAPHY } from '../../Text';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const mediaExamples = [
  {
    label: 'image',
    value: (
      <div
        style={{
          background:
            'url("https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_100,h_100,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg") no-repeat center center',
          height: '100%',
          backgroundSize: 'cover',
        }}
      />
    ),
  },
  {
    label: 'video',
    value: (
      <video
        style={{ width: 'inherit', height: 'inherit' }}
        src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm"
      />
    ),
  },
  { label: 'none', value: null },
];

const infoExample = (
  <div>
    <Text typography={TYPOGRAPHY.largeTitle}>TITLE</Text>
  </div>
);

export default {
  category: StoryCategory.BOOKINGS,
  storyName: 'StripCard',

  component: StripCard,
  componentPath: '../StripCard.tsx',
  componentProps: {
    'data-hook': 'storybook-StripCard',
    media: mediaExamples[0].value,
    info: infoExample,
    roundMedia: false,
    sidePadding: true,
  },
  exampleProps: {
    media: mediaExamples,
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

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Strip', source: examples.strip },
            { title: 'Minimum Height', source: examples.minHeight },
            { title: 'Without Media', source: examples.stripOnlyInfo },
            { title: 'Media Not Available', source: examples.noImageLoaded },
            { title: 'Round Media', source: examples.roundMedia },
            {
              title: 'Without Side Padding',
              source: examples.withoutSidePadding,
            },
          ].map(code),
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
};
