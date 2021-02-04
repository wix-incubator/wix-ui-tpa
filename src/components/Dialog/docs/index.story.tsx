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
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as DialogWiringExampleRaw from '!raw-loader!./DialogWiringExample.tsx';
import * as DialogWiringExampleCSSRaw from '!raw-loader!./DialogWiringExample.st.css';
import { DialogWiringExample } from './DialogWiringExample';
import { Dialog } from '../';
import { Text, TYPOGRAPHY } from '../../Text';
import { Button, PRIORITY } from '../../Button';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const childrenExamples = [
  {
    label: 'Simple text',
    value: (
      <div
        style={{
          textAlign: 'center',
          width: '30vw',
          height: '30vh',
          lineHeight: '30vh',
        }}
      >
        This is the content!
      </div>
    ),
  },
  {
    label: 'Dialog content',
    value: (
      <div className="content" style={{ textAlign: 'center' }}>
        <Text typography={TYPOGRAPHY.largeTitle}>Are You Sure?</Text>
        <div
          className="text-container"
          style={{ marginTop: '24px', marginBottom: '36px' }}
        >
          <Text typography={TYPOGRAPHY.listText} tagName="div">
            <div>Do you really want to delete the selected files?</div>
            <div>Once removed, cannot be undone.</div>
          </Text>
        </div>
        <Button
          upgrade
          priority={PRIORITY.basicSecondary}
          style={{ marginLeft: '10px' }}
        >
          SECONDARY
        </Button>
        <Button upgrade style={{ marginLeft: '10px' }}>
          PRIMARY
        </Button>
      </div>
    ),
  },
];

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Dialog',
  component: storyComponent(Dialog),
  componentPath: '../Dialog.tsx',
  componentProps: (setState) => ({
    'data-hook': 'storybook-Dialog',
    isOpen: false,
    onClose: () => setState({ isOpen: false }),
    children: childrenExamples[0].value,
  }),
  exampleProps: {
    children: childrenExamples,
  },
  dataHook: 'storybook-Dialog',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'A styled Modal component. Used to provide critical information or ask for a decision and/or user input.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: examples.example },
            {
              title: 'Mobile Example',
              source: examples.mobileExample,
            },
            {
              title: 'Mobile Example with non-fullscreen Dialog',
              source: examples.mobileExampleNotFullscreen,
            },
          ].map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
        {
          title: 'Settings Panel',
          sections: [
            settingsPanel({
              title: 'Dialog Panel',
              example: <DialogWiringExample />,
              rawSource: DialogWiringExampleRaw,
              rawCSSSource: DialogWiringExampleCSSRaw,
              params: {
                colors: [
                  {
                    label: 'Close Button Color',
                    wixParam: 'customCloseButtonColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'customBackgroundColor',
                    defaultColor: 'color-1',
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
