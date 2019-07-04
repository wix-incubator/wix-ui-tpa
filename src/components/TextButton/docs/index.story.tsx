import * as React from 'react';
import { PRIORITY, TextButton } from '../';
import Markdown from 'wix-storybook-utils/Markdown';
import {
  importExample as importSourceExample,
  StyledExample,
} from './examples';
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
import * as Readme from '../README.md';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'TextButton',
  component: TextButton,
  componentPath: '../TextButton.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-TextButton',
    children: 'Text Button',
    priority: PRIORITY.link,
  }),
  exampleProps: {
    priority: Object.values(PRIORITY),
  },
  dataHook: 'storybook-TextButton',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          <Markdown key="readme" source={Readme} />,

          importExample({
            source: importSourceExample,
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
  examples: <StyledExample />,
};
