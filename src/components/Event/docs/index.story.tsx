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
import * as EventWiringExampleRaw from '!raw-loader!./EventWiringExample.tsx';
import * as EventWiringExampleCSSRaw from '!raw-loader!./EventWiringExample.st.css';
import { EventWiringExample } from './EventWiringExample';
import { Event } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Event',
  component: Event,
  componentPath: '../Event.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Event',
  }),
  exampleProps: {
    //
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
                    label: 'Font Style',
                    wixParam: 'textFont',
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
