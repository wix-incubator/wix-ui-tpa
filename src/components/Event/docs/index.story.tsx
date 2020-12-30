import * as React from 'react';
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
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as EventWiringExampleRaw from '!raw-loader!./EventWiringExample.tsx';
import * as EventWiringExampleCSSRaw from '!raw-loader!./EventWiringExample.st.css';
import { EventWiringExample } from './EventWiringExample';
import { Event } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Event',
  component: storyComponent(Event),
  componentPath: '../Event.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Event',
    time: '21:30',
    title: 'Yoga Class',
    showTime: true,
    fullday: false,
    selected: false,
    disabled: false,
    onClick: undefined,
  }),
  exampleProps: {
    onClick: [
      { label: 'clickable', value: () => alert('Awesome!') },
      { label: 'display only', value: null },
    ],
  },
  dataHook: 'storybook-Event',
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

          ...[{ title: 'Regular', source: examples.regularSection }].map(code),
          ...[{ title: 'Fullday', source: examples.fulldaySection }].map(code),
          ...[{ title: 'More Events', source: examples.moreEventsSection }].map(
            code,
          ),
          ...[{ title: 'Clickable', source: examples.clickableSection }].map(
            code,
          ),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Event Panel',
              example: <EventWiringExample />,
              rawSource: EventWiringExampleRaw,
              rawCSSSource: EventWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Time Color',
                    wixParam: 'timeColor',
                    defaultColor: 'color-4',
                  },
                  {
                    label: 'Title Color',
                    wixParam: 'titleColor',
                    defaultColor: 'color-4',
                  },
                  {
                    label: 'Full Day Background',
                    wixParam: 'fulldayBgColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Hover Overlay',
                    wixParam: 'hoverOverlayColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selected Overlay',
                    wixParam: 'selectedOverlayColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [
                  {
                    label: 'Title Font',
                    wixParam: 'titleFont',
                    defaultFont: 'arial',
                  },
                  {
                    label: 'Time Font',
                    wixParam: 'timeFont',
                    defaultFont: 'arial',
                  },
                ],
                numbers: [],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
