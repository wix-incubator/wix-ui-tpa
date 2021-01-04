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
import { allComponents } from '../../../../stories/utils/allComponents';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as CalendarCellWiringExampleRaw from '!raw-loader!./CalendarCellWiringExample.tsx';
import * as CalendarCellWiringExampleCSSRaw from '!raw-loader!./CalendarCellWiringExample.st.css';
import { CalendarCellWiringExample } from './CalendarCellWiringExample';
import { CalendarCell, Alignment, Times } from '../';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
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
          description(
            'This component represent a calendar cell and might be used in our future calendar component.',
          ),

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
        { title: 'Playground', sections: [playground(), autoSettingsPanel()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
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
                    label: 'Past Background Color',
                    wixParam: 'pastBackgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Future Background Color',
                    wixParam: 'futureBackgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-2',
                  },
                  {
                    label: 'Past Font Color',
                    wixParam: 'pastFontColor',
                    defaultColor: 'color-4',
                  },
                  {
                    label: 'Font Color',
                    wixParam: 'fontColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Future Font Color',
                    wixParam: 'futureFontColor',
                    defaultColor: 'color-4',
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
