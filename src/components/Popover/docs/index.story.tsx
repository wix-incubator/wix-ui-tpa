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
  code as baseCode,
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

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const PopoverContent = [
  <Popover.Element key="element">
    <Text>This is the Popover.Element</Text>
  </Popover.Element>,
  <Popover.Content key="content">
    <div>This is the Popover.Content</div>
  </Popover.Content>,
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
    children: PopoverContent,
    triggerAction: TriggerAction.click,
  }),
  exampleProps: {
    placement: ['top', 'right', 'bottom', 'left'],
    triggerAction: Object.values(TriggerAction),
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
            { title: 'Hover tooltip', source: examples.hover },
            { title: 'Popover', source: examples.click },
          ].map(code),
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
