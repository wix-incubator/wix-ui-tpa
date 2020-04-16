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
  description,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';

import * as ExtendedRawWithStyleParams from '!raw-loader!./ButtonExtendedWithStyleParamsExample.tsx';
import * as ExtendedCSSRawWithStyleParams from '!raw-loader!./ButtonExtendedWithStyleParamsExample.st.css';

import { examples } from './examples';
import { ButtonExtendedWithStyleParamsExample } from './ButtonExtendedWithStyleParamsExample';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';

import { Button, PRIORITY, SIZE } from '..';

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
          description(
            '**ATTENTION: The current API for this component will be deprecated on the next major version.<br>' +
              'Please use the new API using the `upgrade` prop.<br>**',
          ),
          importExample("import {Button} from 'wix-ui-tpa/Button';"),

          divider(),

          title('Examples'),

          ...[{ title: 'Extended Button', source: examples }].map(code),
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
              example: <ButtonExtendedWithStyleParamsExample />,
              rawSource: ExtendedRawWithStyleParams,
              rawCSSSource: ExtendedCSSRawWithStyleParams,
              title: 'Button with style params',
              params: {
                numbers: [
                  {
                    label: 'Border Width',
                    wixParam: 'borderWidth',
                    defaultNumber: 0,
                    unit: 'px',
                    max: 10,
                  },
                  {
                    label: 'Border Radius',
                    wixParam: 'borderRadius',
                    defaultNumber: 0,
                    unit: 'px',
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
                fonts: [
                  {
                    label: 'Font',
                    wixParam: 'buttonTextFont',
                    defaultFont: 'arial',
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
