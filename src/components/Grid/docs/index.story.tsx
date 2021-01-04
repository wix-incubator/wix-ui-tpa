import * as React from 'react';
import { Grid } from '../';
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
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { Card } from '../../Card';
import { Text } from '../../Text';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

function generateCardItems(amount = 3) {
  return Array(amount)
    .fill(null)
    .map((item, index) => (
      <Grid.Item key={`Grid_item_${index}`}>
        <Card
          stacked
          mediaAspectRatio={16 / 9}
          media={
            <div
              style={{
                height: '100%',
                backgroundImage:
                  'url(https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_560,h_320,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          }
          info={<Text>Item</Text>}
        />
      </Grid.Item>
    ));
}

const itemsExamples = [
  { label: 'none', value: [] },
  { label: 'few', value: generateCardItems(2) },
  { label: 'many', value: generateCardItems(5) },
];

export default {
  category: StoryCategory.BOOKINGS,
  storyName: 'Grid',
  component: Grid,
  componentPath: '../Grid.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Grid',
    children: itemsExamples[1].value,
    maxColumns: '3',
    minColumnWidth: '130',
    maxColumnWidth: '400',
    width: '780',
    rowGap: '32',
    columnGap: '32',
    showRowDivider: false,
    uniformRowHeight: true,
    dividerWidth: '1px',
  }),
  exampleProps: {
    children: itemsExamples,
  },
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
            { title: 'Responsive', source: examples.responsive },
            { title: 'Quilted Columns', source: examples.quiltedColumns },
            { title: 'Quilted Rows', source: examples.quiltedRows },
            { title: 'Max Items Per Row', source: examples.maxColumns },
            { title: 'List Of Strip Cards', source: examples.listOfStripCard },
            {
              title: 'With dividers between the Rows',
              source: examples.showRowDividers,
            },
            {
              title: 'List Of Overlapping Cards',
              source: examples.listOfOverlappingCard,
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
