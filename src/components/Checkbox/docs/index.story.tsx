import * as React from 'react';
import { Checkbox } from '../';
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
import * as ExtendedRawSource from '!raw-loader!./CheckboxExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./CheckboxExtendedExample.st.css';
import { CheckboxExtendedExample } from './CheckboxExtendedExample';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'Checkbox',
  component: Checkbox,
  componentPath: '../Checkbox.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Checkbox',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-Checkbox',
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

          ...[{ title: 'Default', source: examples.example }].map(code),

          ...[
            {
              title: 'Checked',
              source: examples.exampleWithChecked,
            },
          ].map(code),
          ...[{ title: 'Error state', source: examples.exampleWithError }].map(
            code,
          ),
          ...[
            { title: 'Disabled state', source: examples.exampleWithDisabled },
          ].map(code),
          ...[
            {
              title: 'With indeterminate state',
              source: examples.exampleWithIndeterminate,
            },
          ].map(code),
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
              title: 'Settings Panel',
              example: <CheckboxExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Icon Color',
                    wixParam: 'iconColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Text Color',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
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
