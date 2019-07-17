import { AvatarGroup } from '../';
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
import { AvatarGroupSize } from '../AvatarGroup';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Components',
  storyName: 'AvatarGroup',
  component: AvatarGroup,
  componentPath: '../AvatarGroup.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-AvatarGroup',
  }),
  exampleProps: {
    //
  },
  dataHook: 'storybook-AvatarGroup',
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

          ...Object.keys(AvatarGroupSize)
          .map(size => ({
            title: size,
            source: examples.example[size],
          }))
          .map(code),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
