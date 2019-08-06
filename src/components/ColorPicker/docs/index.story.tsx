import * as React from 'react';
import { ColorPicker } from '../';
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
import { ColorPickerExtendedExample } from './ColorPickerExtendedExample';
import * as ExtendedRawSource from '!raw-loader!./ColorPickerExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./ColorPickerExtendedExample.st.css';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'ColorPicker',
  component: ColorPicker,
  componentPath: '../ColorPicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ColorPicker',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-ColorPicker',
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

          ...[{ title: 'Example', source: examples.example }].map(code),
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
              example: <ColorPickerExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              title: 'Colorpicker extended',
              params: {
                numbers: [
                  {
                    label: 'Colorpicker Width',
                    wixParam: 'mainWidth',
                    defaultNumber: 120,
                    unit: 'px',
                    min: 24,
                    max: 720,
                  },
                  {
                    label: 'Item Size',
                    wixParam: 'itemSize',
                    defaultNumber: 24,
                    unit: 'px',
                    min: 24,
                    max: 60,
                  },
                  {
                    label: 'Item Border Radius',
                    wixParam: 'borderRadius',
                    defaultNumber: 100,
                    unit: 'px',
                    min: 0,
                    max: 100,
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
