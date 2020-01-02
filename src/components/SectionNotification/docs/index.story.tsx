import * as React from 'react';
import {
  api,
  code as baseCode,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { NOTIFICATION_TYPE, SectionNotification } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { ReactComponent as ErrorIcon } from '../../../assets/icons/Error.svg';
import { Button, PRIORITY } from '../../Button';
import * as Readme from '../README.md';
import * as examples from './examples';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'SectionNotification',
  component: SectionNotification,
  componentPath: '../SectionNotification.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-SectionNotification',
    type: NOTIFICATION_TYPE.default,
    icon: <ErrorIcon />,
    text: 'This group will only be created after you approve it.',
    controls: (
      <>
        <Button key="1" priority={PRIORITY.basicSecondary}>
          Decline
        </Button>
        <Button key="2" priority={PRIORITY.basic}>
          Approve
        </Button>
      </>
    ),
  }),
  exampleProps: {
    type: Object.values(NOTIFICATION_TYPE),
  },
  dataHook: 'storybook-SectionNotification',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(Readme),

          divider(),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...Object.values(NOTIFICATION_TYPE)
            .map(type => ({
              title: type,
              source: examples.example.desktop[type],
            }))
            .map(code),

          title('Mobile Examples'),

          ...Object.values(NOTIFICATION_TYPE)
            .map(type => ({
              title: type,
              source: examples.example.mobile[type],
            }))
            .map(code),
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
