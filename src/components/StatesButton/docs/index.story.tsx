import * as React from 'react';
import {
  description,
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  example as baseExample,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { StatesButton, StatesButtonProps } from '..';
import { SIZE } from '../../Button';
import { BUTTON_STATES } from '../constants';
import { StatesButtonExample } from './StatesButtonExample';
import * as ExtendedRawSource from '!raw-loader!./StatesButtonExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./StatesButtonExample.st.css';
import * as examples from './examples';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const example = (config, extraContext = {}) =>
  baseExample({
    components: { ...allComponents, ...extraContext },
    compact: true,
    ...config,
  });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'StatesButton',
  component: StatesButton,
  componentPath: '../StatesButton.tsx',

  componentProps: {
    disabled: false,
    onClick: () => {},
    idleContent: 'My States Button',
    inProgressContent: 'Loading...',
    failureContent: 'Try Again',
  },
  exampleProps: {
    state: Object.keys(BUTTON_STATES),
  },
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'StatesButton is used to show a Success, Loading and Error states within the button',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'States Button',
              description: 'Has Idle,  In progress, Success and Failure states',
              source: examples.simpleExample,
            },
          ].map(example),
        ],
      }),

      ...[
        {
          title: 'Playground',
          sections: [playground(), autoSettingsPanel()],
        },
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              example: <StatesButtonExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              title: 'StatesButton Extended',
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
