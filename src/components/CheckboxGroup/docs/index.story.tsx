import * as React from 'react';
import { CheckboxGroup } from '../';
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
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { allComponents } from '../../../../stories/utils/allComponents';
import * as ExtendedRawSource from '!raw-loader!./CheckboxGroupExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./CheckboxGroupExtendedExample.st.css';
import { CheckboxGroupExtendedExample } from './CheckboxGroupExtendedExample';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'CheckboxGroup',
  component: CheckboxGroup,
  componentPath: '../CheckboxGroup.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-CheckboxGroup',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-CheckboxGroup',
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
          ...[{ title: 'With label', source: examples.exampleWithLabel }].map(
            code,
          ),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Settings Panel',
              example: <CheckboxGroupExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Label Color',
                    wixParam: 'labelColor',
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
