import * as ExtendedCSSRawSource from '!raw-loader!./ToggleSwitchExtensionExample.st.css';
import * as ExtendedRawSource from '!raw-loader!./ToggleSwitchExtensionExample.tsx';
import * as React from 'react';
import {
  api,
  code as baseCode,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { ToggleSwitch } from '..';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import * as examples from './examples';
import { ToggleSwitchExtensionExample } from './ToggleSwitchExtensionExample';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
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
          description(
            '`ToggleSwitch` is a component allowing to render a button with on and off states.',
          ),
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
        title: 'Playground',
        sections: [playground(), autoSettingsPanel()],
      }),
      tab({
        title: 'API',
        sections: [api()],
      }),
      tab({
        title: 'Style API',
        sections: [settingsApi()],
      }),
      tab({
        title: 'TestKit',
        sections: [testkit()],
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
