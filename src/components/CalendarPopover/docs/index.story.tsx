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
import * as CalendarPopoverWiringExampleRaw from '!raw-loader!./CalendarPopoverWiringExample.tsx';
import * as CalendarPopoverWiringExampleCSSRaw from '!raw-loader!./CalendarPopoverWiringExample.st.css';
import { CalendarPopoverWiringExample } from './CalendarPopoverWiringExample';
import { CalendarPopover } from '..';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'CalendarPopover',
  component: storyComponent(CalendarPopover),
  componentPath: '../CalendarPopover.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-CalendarPopover',
    title: 'Iyengar Yoga',
    isShown: true,
    withShadow: false,
    animated: true,
    withArrow: false,
    arrowSide: 'right',
    closeAriaLabel: 'close',
    children:
      'named after and developed by B. K. S. Iyengar, and described in his bestselling 1966 book Light on Yoga, is a form of yoga as exercise that has an emphasis on detail, precision and alignment in the performance of yoga postures (asanas)',
  }),
  exampleProps: {
    arrowSide: ['right', 'left'],
  },
  dataHook: 'storybook-CalendarPopover',
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

          ...[{ title: '', source: examples.popoverExample }].map(code),
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
              title: 'CalendarPopover Panel',
              example: <CalendarPopoverWiringExample />,
              rawSource: CalendarPopoverWiringExampleRaw,
              rawCSSSource: CalendarPopoverWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Icon Color',
                    wixParam: 'iconColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Title Color',
                    wixParam: 'titleColor',
                    defaultColor: 'color-5',
                  },
                ],
                fonts: [
                  {
                    label: 'Title Font',
                    wixParam: 'titleFont',
                    defaultFont: 'arial',
                  },
                ],
                numbers: [
                  {
                    label: 'Radius',
                    wixParam: 'radius',
                    defaultNumber: 2,
                    unit: 'px',
                    max: 20,
                  },
                  {
                    label: 'Icon Top Padding',
                    wixParam: 'iconTopPadding',
                    defaultNumber: 16,
                    unit: 'px',
                  },
                  {
                    label: 'Icon Right Padding (LTR)',
                    wixParam: 'iconRightPadding',
                    defaultNumber: 16,
                    unit: 'px',
                  },
                  {
                    label: 'Icon Left Padding (RTL)',
                    wixParam: 'iconLeftPadding',
                    defaultNumber: 16,
                    unit: 'px',
                  },
                  {
                    label: 'Horizontal Padding',
                    wixParam: 'horizontalPadding',
                    defaultNumber: 24,
                    unit: 'px',
                  },
                  {
                    label: 'Vertical Padding',
                    wixParam: 'verticalPadding',
                    defaultNumber: 24,
                    unit: 'px',
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
