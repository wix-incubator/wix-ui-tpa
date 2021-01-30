import * as React from 'react';
import * as examples from './examples';
import {
  description,
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  example as baseExample,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as PopoverWiringExampleRaw from '!raw-loader!./PopoverWiringExample.tsx';
import * as PopoverWiringExampleCSSRaw from '!raw-loader!./PopoverWiringExample.st.css';
import { PopoverWiringExample } from './PopoverWiringExample';
import { Popover, TriggerAction } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { Text } from '../../Text';

const example = (config) =>
  baseExample({ components: allComponents, compact: true, ...config });

const childrenExamples = [
  {
    label: 'Simple content',
    value: [
      <Popover.Element key="element">
        <Text>This is the Popover.Element</Text>
      </Popover.Element>,
      <Popover.Content key="content">
        <div>This is the Popover.Content</div>
      </Popover.Content>,
    ],
  },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Popover',
  component: storyComponent(Popover),
  componentPath: '../Popover.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Popover',
    placement: 'top',
    wiredToSiteColors: true,
    children: childrenExamples[0].value,
    triggerAction: TriggerAction.click,
    shown: false,
  }),
  exampleProps: {
    placement: ['top', 'right', 'bottom', 'left'],
    triggerAction: Object.values(TriggerAction),
    children: childrenExamples,
  },
  dataHook: 'storybook-Popover',
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(''),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Uncontrolled',
              text:
                'The component can be used uncontrolled. In this case the tooltip will appear on hover.',
              source: examples.uncontrolled,
            },
            {
              title: 'Controlled: Click',
              text:
                'Controlling the Popover can be done by click.<br />' +
                '`triggerAction` is used to adjust the component to use correct a11y configuration',
              source: examples.controlledClick,
            },
            {
              title: 'Controlled: Hover',
              text:
                'Controlling the Popover can be done by hover.<br />' +
                '`triggerAction` is used to adjust the component to use correct a11y configuration',
              source: examples.controlledHover,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Popover Panel',
              example: <PopoverWiringExample />,
              rawSource: PopoverWiringExampleRaw,
              rawCSSSource: PopoverWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background color',
                    wixParam: 'BackgroundOverride',
                    defaultColor: 'color-1',
                  },
                ],
                fonts: [],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
