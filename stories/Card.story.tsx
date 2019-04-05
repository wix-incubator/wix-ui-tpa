// import * as React from 'react';
// import {Card} from '../src/components/Card';
// import * as examples from './Card/examples';
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
//             { title: 'Overlapping', source: examples.overlapping },
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
import {Examples} from './Card';
import {Card} from '../src/components/Card';
const mediaExamples = [
  { label: 'image', value: <img src="something"/>},
  { label: 'video', value: <video src=""/> },
];
export default {
  category: 'Components',
  storyName: 'Card',
  component: Card,
  componentPath: '../src/components/Card/Card.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-Card',
  }),
  exampleProps: {
    media: mediaExamples,
  }
  examples: (
    <Examples/>
  )
};
