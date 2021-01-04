import * as React from 'react';
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
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as TagsWiringExampleRaw from '!raw-loader!./TagsWiringExample.tsx';
import * as TagsWiringExampleCSSRaw from '!raw-loader!./TagsWiringExample.st.css';
import { TagsWiringExample } from './TagsWiringExample';
import { Tags } from '../';
import { ALIGNMENT, SIZE, SKIN } from '../constants';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const items = Array(20)
  .fill('')
  .map((item, index) => ({
    title: `Title ${index + 1}`,
    checked: index % 3 === 0,
    value: `value ${index + 1}`,
  }));

const exampleItems = [
  { label: 'few items', value: items.slice(0, 4) },
  { label: 'many items', value: items },
];

function ExampleTags(props) {
  const [update, forceUpdate] = React.useState(false);

  return (
    <Tags
      {...props}
      onClick={(item) => {
        item.checked = !item.checked;
        forceUpdate(!update);
      }}
    />
  );
}

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Tags',
  component: storyComponent(ExampleTags),
  componentPath: '../Tags.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Tags',
    items: exampleItems[1].value,
    alignment: ALIGNMENT.center,
    size: SIZE.medium,
    skin: SKIN.solid,
  }),
  exampleProps: {
    items: exampleItems,
    alignment: Object.keys(ALIGNMENT).map((key) => ALIGNMENT[key]),
    size: Object.keys(SIZE).map((key) => SIZE[key]),
    skin: Object.keys(SKIN).map((key) => SKIN[key]),
  },
  dataHook: 'storybook-Tags',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`Tags` is a component allowing to render a selection of tags.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[{ title: 'Example', source: examples.example }].map(code),
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
              title: 'Tags Panel',
              example: <TagsWiringExample />,
              rawSource: TagsWiringExampleRaw,
              rawCSSSource: TagsWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Text Color',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'bgColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Hover Text Color',
                    wixParam: 'hoverTextColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Hover Background Color',
                    wixParam: 'hoverBgColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Hover Border Color',
                    wixParam: 'hoverBorderColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Selected Text Color',
                    wixParam: 'checkedTextColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Selected Background Color',
                    wixParam: 'checkedBgColor',
                    defaultColor: 'color-8',
                  },
                ],
                fonts: [
                  {
                    label: 'Font',
                    wixParam: 'textFont',
                    defaultFont: 'arial',
                    size: 16,
                  },
                ],
                numbers: [
                  {
                    label: 'Vertical Spacing',
                    wixParam: 'verticalSpacing',
                    defaultNumber: 4,
                    unit: 'px',
                    max: 20,
                  },
                  {
                    label: 'Horizontal Spacing',
                    wixParam: 'horizontalSpacing',
                    defaultNumber: 4,
                    unit: 'px',
                    max: 20,
                  },
                  {
                    label: 'Border Width',
                    wixParam: 'borderWidth',
                    defaultNumber: 1,
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
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
