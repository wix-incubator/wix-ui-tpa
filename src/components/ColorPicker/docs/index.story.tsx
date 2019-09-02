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
  description,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import {
  ColorPickerExtendedExample,
  COLORS,
} from './ColorPickerExtendedExample';
import * as ExtendedRawSource from '!raw-loader!./ColorPickerExtendedExample.tsx';
import * as AnotherExtendedRawSource from '!raw-loader!./ColorPickerAnotherExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./ColorPickerExtendedExample.st.css';
import * as AnotherExtendedCSSRawSource from '!raw-loader!./ColorPickerAnotherExtendedExample.st.css';
import * as Readme from '../README.md';
import { ColorPickerAnotherExtendedExample } from './ColorPickerAnotherExtendedExample';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

const CHILDREN = [
  {
    label: '4 colors',
    value: [1, 2, 3, 4].map(n => (
      <ColorPicker.Item
        key={n}
        value={COLORS[n].value}
        aria-label={COLORS[n].ariaLabel}
      />
    )),
  },
  {
    label: '3 colors with second selected',
    value: [1, 2, 3].map(n => (
      <ColorPicker.Item
        checked={n === 2}
        key={n}
        value={COLORS[n].value}
        aria-label={COLORS[n].ariaLabel}
      />
    )),
  },
];

export default {
  category: 'Components',
  storyName: 'ColorPicker',
  component: ColorPicker,
  componentPath: '../ColorPicker.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ColorPicker',
    onChange: color => console.log(color),
    children: CHILDREN[0].value,
  }),
  exampleProps: {
    children: CHILDREN,
  },
  dataHook: 'storybook-ColorPicker',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(Readme),
          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[{ source: examples.example }].map(code),
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
              title: 'Colorpicker extended with border-radius in px',
              params: {},
            }),
            settingsPanel({
              example: <ColorPickerAnotherExtendedExample />,
              rawSource: AnotherExtendedRawSource,
              rawCSSSource: AnotherExtendedCSSRawSource,
              title: 'Colorpicker extended with border-radius in %',
              params: {
                numbers: [
                  {
                    label: 'Item Size',
                    wixParam: 'itemSize',
                    defaultNumber: 24,
                    unit: 'px',
                    min: 20,
                    max: 60,
                  },
                  {
                    label: 'Item Border Radius',
                    wixParam: 'borderRadius',
                    defaultNumber: 12,
                    unit: 'px',
                    min: 0,
                    max: 30,
                  },
                  {
                    label: 'Item Border Radius',
                    wixParam: 'anotherBorderRadius',
                    defaultNumber: 12,
                    unit: '%',
                    min: 0,
                    max: 50,
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
