import * as React from 'react';
import {
  api,
  code as baseCode,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { BUTTON_PRIORITY, NOTIFICATION_TYPE, SectionNotification } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { ReactComponent as ErrorIcon } from '../../../assets/icons/Error.svg';
import * as examples from './examples';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'SectionNotification',
  component: SectionNotification,
  componentPath: '../SectionNotification.tsx',
  // tslint:disable:jsx-wrap-multiline
  componentProps: () => ({
    'data-hook': 'storybook-SectionNotification',
    type: NOTIFICATION_TYPE.default,
    children: [
      <SectionNotification.Icon icon={<ErrorIcon />} key="icon" />,
      <SectionNotification.Text key="text">
        This group will only be created after you approve it.
      </SectionNotification.Text>,
      <SectionNotification.Button
        key="decline"
        priority={BUTTON_PRIORITY.basicSecondary}
      >
        Decline
      </SectionNotification.Button>,
      <SectionNotification.Button
        key="approve"
        priority={BUTTON_PRIORITY.basic}
      >
        Approve
      </SectionNotification.Button>,
    ],
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
