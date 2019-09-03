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

function generateItem(props) {
  return (
    <ActionsMenu.Item
      key={props.content}
      onClick={() => alert('click')}
      {...props}
    />
  );
}

export default {
  category: 'Components',
  storyName: 'ActionsMenu',
  component: ActionsMenu,
  componentPath: '../ActionsMenu.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ActionsMenu',
    children: [
      generateItem({
        content: 'item 1',
      }),
      generateItem({
        content: 'item 2',
        subtitle: 'Subtitle',
      }),
      <ActionsMenu.Divider key={2.5} />,
      generateItem({
        content: 'item 3',
        prefixIcon: <ShareIcon />,
        subtitle: 'Subtitle',
      }),
      generateItem({
        content: 'item 4',
        prefixIcon: <ShareIcon />,
        subtitle: 'Subtitle',
        disabled: true,
      }),
      generateItem({
        content: 'item 5',
        prefixIcon: <ShareIcon />,
        subtitle: 'Subtitle',
      }),
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
