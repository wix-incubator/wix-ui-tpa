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
import * as PopoverWiringExampleRaw from '!raw-loader!./PopoverWiringExample.tsx';
import * as PopoverWiringExampleCSSRaw from '!raw-loader!./PopoverWiringExample.st.css';
import { PopoverWiringExample } from './PopoverWiringExample';
import { Popover } from '../';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Popover',
  component: Popover,
  componentPath: '../Popover.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Popover',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-Popover',
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

          ...[{ title: 'Alignment', source: examples.alignment }].map(code),
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
              title: 'Popover Panel',
              example: <PopoverWiringExample />,
              rawSource: PopoverWiringExampleRaw,
              rawCSSSource: PopoverWiringExampleCSSRaw,
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
                ],
                fonts: [],
                numbers: [
                  {
                    label: 'Radius',
                    wixParam: 'radius',
                    defaultNumber: 2,
                    unit: 'px',
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
                    label: 'Top Padding',
                    wixParam: 'topPadding',
                    defaultNumber: 24,
                    unit: 'px',
                  },
                  {
                    label: 'Right Padding',
                    wixParam: 'rightPadding',
                    defaultNumber: 24,
                    unit: 'px',
                  },
                  {
                    label: 'Left Padding',
                    wixParam: 'leftPadding',
                    defaultNumber: 24,
                    unit: 'px',
                  },
                  {
                    label: 'Bottom Padding',
                    wixParam: 'bottomPadding',
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
