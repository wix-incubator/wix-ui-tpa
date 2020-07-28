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
import { CalendarCell, Alignment, Times } from '../';

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
    alignment: Object.values(Alignment),
    timeType: Object.values(Times),
    stertchable: false,
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

          ...[{ title: 'Time Types', source: examples.timeTypes }].map(code),
          ...[{ title: 'Resolutions', source: examples.resulotions }].map(code),
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
                colors: [
                  {
                    label: 'Background Color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-2',
                  },
                  {
                    label: 'Font Color',
                    wixParam: 'fontColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Current Day Color',
                    wixParam: 'todayColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [
                  {
                    label: 'Text Font',
                    wixParam: 'fontStyle',
                    defaultFont: 'arial',
                  },
                ],
                numbers: [
                  {
                    label: 'Border Width',
                    wixParam: 'borderWidth',
                    defaultNumber: 1,
                    unit: 'px',
                    max: 3,
                  },
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
