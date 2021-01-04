import {
  api,
  code as baseCode,
  description,
  divider,
  header,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { Toast } from '../';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { TOAST_PLACEMENT, TOAST_SKIN } from '../types';
import * as examples from './examples';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'Toast',
  component: storyComponent(Toast),
  componentPath: '../Toast.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Toast',
    children: 'Hey, I am toast component',
    skin: TOAST_SKIN.success,
    onClose: () => {},
  }),
  exampleProps: {
    skin: Object.values(TOAST_SKIN),
    placement: Object.values(TOAST_PLACEMENT),
    shouldShowCloseButton: false,
    shouldAnimate: false,
    isShown: false,
  },
  dataHook: 'storybook-Toast',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`Toast` is a component allowing to render a custom notification message.',
          ),

          divider(),

          title('Examples'),

          ...Object.keys(TOAST_SKIN)
            .map((skin) => ({
              title: skin,
              source: examples.example.desktop[skin],
            }))
            .map(code),

          title('Mobile Examples'),

          ...Object.keys(TOAST_SKIN)
            .map((skin) => ({
              title: skin,
              source: examples.example.mobile[skin],
            }))
            .map(code),
        ],
      }),

      ...[
        { title: 'Playground', sections: [playground()] },
        { title: 'API', sections: [api()] },
        { title: 'Style API', sections: [settingsApi()] },
        { title: 'TestKit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
