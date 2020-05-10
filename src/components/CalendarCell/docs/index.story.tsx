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
import * as CalendarCellWiringExampleRaw from '!raw-loader!./CalendarCellWiringExample.tsx';
import * as CalendarCellWiringExampleCSSRaw from '!raw-loader!./CalendarCellWiringExample.st.css';
import { CalendarCellWiringExample } from './CalendarCellWiringExample';
import { CalendarCell, Times } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'CalendarCell',
  component: CalendarCell,
  componentPath: '../CalendarCell.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-CalendarCell',
  }),
  exampleProps: {
    timeType: Object.values(Times),
    time: '',
  },
  dataHook: 'storybook-CalendarCell',
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

          ...[{ title: 'Example', source: examples.example }].map(code),
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
              title: 'CalendarCell Panel',
              example: <CalendarCellWiringExample />,
              rawSource: CalendarCellWiringExampleRaw,
              rawCSSSource: CalendarCellWiringExampleCSSRaw,
              params: {
                colors: [],
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
