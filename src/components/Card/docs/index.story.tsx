// import * as React from 'react';
// import {Card} from '../';
// import * as examples from './examples';
// import {
//   api,
//   divider,
//   header,
//   importExample,
//   playground,
//   tab,
//   code as baseCode,
//   tabs,
//   testkit,
//   title,
//   mdx,
// } from 'wix-storybook-utils/Sections';
// import { baseScope } from './utils/LiveCodeExample';
// import MDX from '../src/components/Card/README.mdx'
//
// const code = config => baseCode({ components: baseScope, compact: true, ...config });
//
// export default {
//   category: 'Components',
//   storyName: 'Card',
//   component: Card,
//   componentPath: '../src/components/Card/Card.tsx',
//   dataHook: 'storybook-Card',
//   sections: [
//     header({
//       sourceUrl: 'https://github.com/wix/wix-ui-tpa/tree/master/src/components/Card'
//     }),
//
//     tabs([
//       tab({
//         title: 'Usage',
//         sections: [
//           importExample({
//             source: examples.importExample,
//           }),
//
//           divider(),
//
//           title('Examples'),
//
//           ...[
//             { title: 'Side By Side', source: examples.sideBySide },
//           ].map(code),
//         ],
//       }),
//
//       ...[
//         { title: 'API', sections: [api()] },
//         { title: 'TestKit', sections: [testkit()] },
//         { title: 'Playground', sections: [playground()] },
//       ].map(tab),
//     ]),
//     mdx({ content: MDX }),
//   ]
// };

import * as React from 'react';
import Examples from './exampleWithSettingPanel';
import { Card, CardRatioOptions } from '../';
import { Button } from '../../Button';
import { Text, TYPOGRAPHY } from '../../Text';

const mediaExamples = [
  {
    label: 'image',
    value: (
      <div
        style={{
          background:
            'url("https://picsum.photos/550/380") no-repeat center center',
          height: '100%',
          backgroundSize: 'cover',
        }}
      />
    ),
  },
  { label: 'video', value: <video src="" /> },
];

const infoExample = (
  <div>
    <Text typography={TYPOGRAPHY.largeTitle}>BIG TITLE WITH LINE BREAKING</Text>
    <div style={{ marginTop: '24px' }}>
      <Button>button</Button>
    </div>
  </div>
);

export default {
  kind: 'Components',
  category: 'Components',
  storyName: 'Card',
  component: Card,
  componentPath: '../Card.tsx',
  componentProps: () => ({
    media: mediaExamples[0].value,
    info: infoExample,
    'data-hook': 'storybook-Card',
  }),
  exampleProps: {
    media: mediaExamples,
    ratio: Object.keys(CardRatioOptions).map(key => CardRatioOptions[key]),
  },
  examples: <Examples />,
};
