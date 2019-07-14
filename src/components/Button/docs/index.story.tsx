import * as React from 'react';
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
import { Button, PRIORITY, SIZE } from '..';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { allComponents } from '../../../../stories/utils/allComponents';
import { ButtonExtendedExample } from './ButtonExtendedExample';
import { ButtonExtendedWithStyleParamsExample } from './ButtonExtendedWithStyleParamsExample';
import * as ExtendedRawWithStyleParams from '!raw-loader!./ButtonExtendedWithStyleParamsExample.tsx';
import * as ExtendedCSSRawWithStyleParams from '!raw-loader!./ButtonExtendedWithStyleParamsExample.st.css';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Button',
  component: Button,
  componentPath: '../Button.tsx',

  componentProps: {
    'data-hook': 'storybook-Button',
    children: 'Book Now',
    priority: PRIORITY.basic,
    size: SIZE.medium,
    fullWidth: false,
  },
  exampleProps: {
    priority: Object.values(PRIORITY),
    size: Object.values(SIZE),
  },

  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          importExample("import {Button} from 'wix-ui-tpa/Button';"),

          divider(),

          title('Examples'),

          code({ title: 'Priorities', source: ButtonExtendedExample }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Template wiring',
          sections: [
            settingsPanel({
              example: <ButtonExtendedWithStyleParamsExample />,
              rawSource: ExtendedRawWithStyleParams,
              rawCSSSource: ExtendedCSSRawWithStyleParams,
              params: {
                numbers: [
                  {
                    label: 'Border Width',
                    wixParam: 'borderWidth',
                    defaultNumber: 0,
                    unit: 'px',
                  },
                  {
                    label: 'Border Radius',
                    wixParam: 'borderRadius',
                    defaultNumber: 0,
                    unit: 'px',
                  },
                ],
                fonts: [
                  {
                    label: 'Font',
                    wixParam: 'buttonTextFont',
                    defaultFont: 'arial',
                  },
                ],
                colors: [
                  {
                    label: 'Text Color',
                    wixParam: 'buttonTextColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'buttonBackgroundColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-8',
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
