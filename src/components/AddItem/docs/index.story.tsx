import * as React from 'react';
import * as examples from './examples';
import {
  description,
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
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as AddItemWiringExampleRaw from '!raw-loader!./AddItemWiringExample.tsx';
import * as AddItemWiringExampleCSSRaw from '!raw-loader!./AddItemWiringExample.st.css';
import { AddItemWiringExample } from './AddItemWiringExample';
import { AddItem, ALIGNMENT, ICON_SIZE, DIRECTION } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'AddItem',
  component: storyComponent(AddItem),
  componentPath: '../AddItem.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-AddItem',
    disabled: false,
    hasError: false,
    children: 'Add Item',
  }),
  exampleProps: {
    alignment: Object.values(ALIGNMENT),
    iconSize: Object.values(ICON_SIZE),
    direction: Object.values(DIRECTION),
  },
  dataHook: 'storybook-AddItem',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'Add Item is a component used to add new items to an existing items list.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'States', source: examples.example },
            { title: 'Icon Sizes', source: examples.sizesExample },
            { title: 'Alignment', source: examples.alignmentExample },
            { title: 'Direction', source: examples.directionExample },
            { title: 'Icon Only', source: examples.iconsExample },
          ].map(code),
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
              title: 'AddItem Panel',
              example: <AddItemWiringExample />,
              rawSource: AddItemWiringExampleRaw,
              rawCSSSource: AddItemWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Border Color',
                    wixParam: 'customBorderColor',
                    defaultColor: 'color-8',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'customBackgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Text Color',
                    wixParam: 'customTextColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [
                  {
                    label: 'Text Font',
                    wixParam: 'textFont',
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
