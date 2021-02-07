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
import { OptimizedStylesBanner } from '../../../../stories/OptimizedStylesBanner';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import * as TagWiringExampleRaw from '!raw-loader!./TagWiringExample.tsx';
import * as TagWiringExampleCSSRaw from '!raw-loader!./TagWiringExample.st.css';
import { TagWiringExample } from './TagWiringExample';
import { Tag, SIZE, SKIN } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Tag',
  component: storyComponent(Tag),
  componentPath: '../Tag.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Tag',
    size: SIZE.small,
    skin: SKIN.solid,
    isRemovable: true,
    children: 'Tag Name',
    onClick() {
      alert('onClick Handler');
    },
    onRemove() {
      alert('onRemove Handler');
    },
  }),
  exampleProps: {
    size: Object.values(SIZE),
    skin: Object.values(SKIN),
  },
  dataHook: 'storybook-Tag',
  sections: [
    header({
      component: <OptimizedStylesBanner />,
    }),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'An atom component, the tag component, which can be used in tag-input’s tag-lists, tag-selections, etc.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Removable', source: examples.removable },
            { title: 'Clickable', source: examples.clickable },
            { title: 'Readonly', source: examples.readonly },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Tag Panel',
              example: <TagWiringExample />,
              rawSource: TagWiringExampleRaw,
              rawCSSSource: TagWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Background',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
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
                fonts: [
                  {
                    label: 'Tag label',
                    wixParam: 'textFont',
                    defaultFont: 'arial',
                    size: 14,
                  },
                ],
                numbers: [
                  {
                    label: 'Border radius',
                    defaultNumber: 0,
                    wixParam: 'borderRadius',
                    unit: 'px',
                  },
                  {
                    label: 'Border width',
                    defaultNumber: 0,
                    max: 5,
                    min: 1,
                    wixParam: 'borderWidth',
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
