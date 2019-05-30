import * as React from 'react';
import { Grid } from '../';
import * as examples from './examples';
import {
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
import { Card } from '../../Card';
import { Text } from '../../Text';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const generateCardItems = (amount = 3) =>
  Array(amount).fill({
    item: (
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
    ),
  });

const itemsExamples = [
  { label: 'none', value: [] },
  { label: 'few', value: generateCardItems(3) },
  { label: 'many', value: generateCardItems(5) },
];

export default {
  category: 'Components',
  storyName: 'Grid',
  component: Grid,
  componentPath: '../Grid.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Grid',
    items: itemsExamples[1].value,
    maxColumns: '3',
    minColumnWidth: '130',
    width: '780',
    rowGap: '32',
    columnGap: '32',
    withDivider: false,
    dividerWidth: '1px',
  }),
  exampleProps: {
    items: itemsExamples,
  },
  dataHook: 'storybook-Grid',
  sections: [
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
            { title: 'Quilted Columns', source: examples.quiltedColumnss },
            { title: 'Quilted Rows', source: examples.quiltedRows },
            { title: 'Max Items Per Row', source: examples.maxColumns },
            { title: 'List Of Strip Cards', source: examples.listOfStripCard },
            {
              title: 'With dividers between the Items',
              source: examples.withDividers,
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
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
