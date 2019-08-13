import * as React from 'react';
import { ActionsMenu, Alignment } from '../';
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
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const onClick = () => {};

export default {
  category: 'Components',
  storyName: 'ActionsMenu',
  component: ActionsMenu,
  componentPath: '../ActionsMenu.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ActionsMenu',
    children: [
      <ActionsMenu.Item key={1} onClick={onClick} content="item 1" />,
      <ActionsMenu.Item
        key={2}
        onClick={onClick}
        content="item 2"
        subtitle="Subtitle"
      />,
      <ActionsMenu.Divider key={2.5} />,
      <ActionsMenu.Item
        key={3}
        onClick={onClick}
        content="item 3"
        prefixIcon={<ShareIcon />}
        subtitle="Subtitle"
      />,
      <ActionsMenu.Item
        key={4}
        onClick={onClick}
        content="item 4"
        prefixIcon={<ShareIcon />}
        subtitle="Subtitle"
        disabled
      />,
      <ActionsMenu.Item
        key={5}
        onClick={onClick}
        content="item 5"
        prefixIcon={<ShareIcon />}
      />,
    ],
  }),
  exampleProps: {
    alignment: Object.values(Alignment),
  },
  dataHook: 'storybook-ActionsMenu',
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
