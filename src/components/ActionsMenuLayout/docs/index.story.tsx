import * as React from 'react';
import { ActionsMenuLayout, Alignment } from '../';
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
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';
import {
  autoSettingsPanel,
  settingsPanel,
} from '../../../../stories/utils/SettingsPanel';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import * as ExtendedRawSource from '!raw-loader!./ActionsMenuLayoutExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./ActionsMenuLayoutExtendedExample.st.css';
import { ActionsMenuLayoutExtendedExample } from './ActionsMenuLayoutExtendedExample';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

function generateItem(props) {
  return (
    <ActionsMenuLayout.Item
      key={props.content}
      onClick={() => alert('click')}
      {...props}
    />
  );
}

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'ActionsMenuLayout',
  component: storyComponent(ActionsMenuLayout),
  componentPath: '../ActionsMenuLayout.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-ActionsMenuLayout',
    children: [
      generateItem({
        content: 'item 1',
      }),
      generateItem({
        content: 'item 2',
        subtitle: 'Subtitle',
      }),
      <ActionsMenuLayout.Divider key={2.5} />,
      generateItem({
        content: 'item 3',
        prefixIcon: <ShareIcon />,
        subtitle: 'Subtitle',
      }),
      generateItem({
        content: 'item 4',
        prefixIcon: <ShareIcon />,
        subtitle: 'Subtitle',
        disabled: true,
      }),
      generateItem({
        content: 'item 5',
        prefixIcon: <ShareIcon />,
        subtitle: 'Subtitle',
      }),
    ],
  }),
  exampleProps: {
    alignment: Object.values(Alignment),
  },
  dataHook: 'storybook-ActionsMenuLayout',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'ActionsMenuLayout component wraps multiple options into a list.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Example', source: examples.ActionsMenuLayoutExample },
            { title: 'Mobile Example', source: examples.mobileExample },
            { title: 'RTL Example', source: examples.rtlExample },
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
              title: 'Settings Panel',
              example: <ActionsMenuLayoutExtendedExample />,
              rawSource: ExtendedRawSource,
              rawCSSSource: ExtendedCSSRawSource,
              params: {
                colors: [
                  {
                    label: 'Menu Background Color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Menu Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-5',
                  },
                ],
                fonts: [
                  {
                    label: 'Item Font',
                    wixParam: 'itemFont',
                    defaultFont: 'arial',
                  },
                  {
                    label: 'Item Subtitle Font',
                    wixParam: 'itemSubtitleFont',
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
