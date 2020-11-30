import * as React from 'react';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  example as baseExample,
  tabs,
  testkit,
  description,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { Text, TYPOGRAPHY } from '../../Text';
import { Card } from '../';
import * as examples from './examples';
import * as exampleStyles from './examples.st.css';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

const childrenExample = [
  {
    label: 'Product Card',
    value: (
      <>
        <Card.Container>
          <img src="product.png" alt="My Product" />
        </Card.Container>
        <Card.Container>
          <>
            <Text typography={TYPOGRAPHY.smallTitle} tagName={'h3'}>
              My Product
            </Text>
            <Text typography={TYPOGRAPHY.runningText}>Loum Ipsum</Text>
          </>
        </Card.Container>
      </>
    ),
  },
];

function ExampleCard(props) {
  return <Card {...props} upgrade />;
}

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Card',
  component: storyComponent(ExampleCard),
  componentPath: '../../NewCard/NewCard.tsx',

  componentProps: {
    'data-hook': 'storybook-Card',
    children: childrenExample[0].value,
  },

  hiddenProps: ['upgrade', 'children'],

  exampleProps: {
    upgrade: true,
    children: childrenExample,
  },

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '**ATTENTION: The current API for this component will be deprecated on the next major version.<br>' +
              'Please use the new API using the `upgrade` prop.<br>',
          ),
          importExample("import { Card } from 'wix-ui-tpa/Card';"),

          divider(),

          title('Examples'),

          example(
            {
              title: 'Default Layout',
              description: 'A side-by-side layout',
              source: examples.defaultExample,
            },
            exampleStyles,
          ),
          example(
            {
              title: 'Stacked Example',
              description: 'Card containers can be stacked vertically',
              source: examples.stackedExample,
            },
            exampleStyles,
          ),
          example(
            {
              title: 'Container Wrapping',
              description: 'Card containers can wrap when constrained by width',
              source: examples.minWidthExample,
            },
            exampleStyles,
          ),
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
