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

import * as ExtendedRawWithStyleParams from '!raw-loader!./ButtonWiringExample.tsx';
import * as ExtendedCSSRawWithStyleParams from '!raw-loader!./ButtonWiringExample.st.css';

import { examples } from './examples';
import { ButtonWiringExample } from './ButtonWiringExample';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';

import { Button, PRIORITY, SIZE } from '..';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { ReactComponent as Heart } from '../../../assets/icons/Heart.svg';
import { ReactComponent as Share } from '../../../assets/icons/Share.svg';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const prefixIcons = [
  { value: undefined, label: 'None' },
  { value: <Heart />, label: 'Heart' },
];
const suffixIcons = [
  { value: undefined, label: 'None' },
  { value: <Share />, label: 'Share' },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Button',
  component: Button,
  componentPath: '../Button.tsx',

  componentProps: {
    'data-hook': 'storybook-Button',
    children: 'Book Now',
    priority: PRIORITY.basic,
    size: SIZE.medium,
    fullWidth: false,
    prefixIcon: prefixIcons[0].value,
    suffixIcon: suffixIcons[0].value,
    upgrade: true,
  },
  exampleProps: {
    priority: Object.values(PRIORITY),
    size: Object.values(SIZE),
    prefixIcon: prefixIcons,
    suffixIcon: suffixIcons,
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
          description('A simple Button component.'),

          importExample("import {Button} from 'wix-ui-tpa/Button';"),

          divider(),

          title('Examples'),

          ...[{ title: 'Extended Button', source: examples }].map(code),
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
              example: <ButtonWiringExample />,
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
                    label: 'Hover Background Color',
                    wixParam: 'hoverBackgroundColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Hover Border Color',
                    wixParam: 'hoverBorderColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [
                  {
                    label: 'Font',
                    wixParam: 'buttonTextFont',
                    defaultFont: 'arial',
                    size: 16,
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
