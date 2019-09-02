import * as React from 'react';
import { ToggleSwitch } from '..';
import * as examples from './examples';
import {
  header,
  api,
  divider,
  description,
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
import * as ExtendedRawSource from '!raw-loader!./ToggleSwitchExtensionExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./ToggleSwitchExtensionExample.st.css';
import { ToggleSwitchExtensionExample } from './ToggleSwitchExtensionExample';

import * as Readme from '../README.md';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'ToggleSwitch',
  component: ToggleSwitch,
  componentPath: '../ToggleSwitch.tsx',
  componentProps: {
    'data-hook': 'storybook-ToggleSwitch',
    //checked: true,
  },
  exampleProps: {},
  dataHook: 'storybook-ToggleSwitch',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(Readme),
          importExample(examples.importExample),
          divider(),
          title('Examples'),
          ...[
            { title: 'Default', source: examples.defult },
            { title: 'Checked', source: examples.checked },
            { title: 'Disabled', source: examples.disabled },
          ].map(code),
        ],
      }),
      tab({
        title: 'API',
        sections: [api()],
      }),
      tab({
        title: 'TestKit',
        sections: [testkit()],
      }),
      tab({
        title: 'Playground',
        sections: [playground()],
      }),
      tab({
        title: 'Settings Panel',
        sections: [
          settingsPanel({
            title: 'Settings Panel',
            example: <ToggleSwitchExtensionExample />,
            rawSource: ExtendedRawSource,
            rawCSSSource: ExtendedCSSRawSource,
            params: {
              colors: [
                {
                  label: 'Base Color',
                  wixParam: 'baseColor',
                  defaultColor: 'color-5',
                },
                {
                  label: 'Selected Color',
                  wixParam: 'selectedColor',
                  defaultColor: 'color-8',
                },
                {
                  label: 'Knob Color',
                  wixParam: 'knobColor',
                  defaultColor: 'color-1',
                },
                {
                  label: 'Disabled Color',
                  wixParam: 'disabledColor',
                  defaultColor: 'color-3',
                },
              ],
            },
          }),
        ],
      }),
    ]),
  ],
};
