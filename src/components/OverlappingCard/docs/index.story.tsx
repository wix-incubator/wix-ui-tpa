// import * as React from 'react';
// import {OverlappingCard} from '../';
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
// import MDX from '../src/components/OverlappingCard/README.mdx'
//
// const code = config => baseCode({ components: baseScope, compact: true, ...config });
//
// export default {
//   category: 'Components',
//   storyName: 'OverlappingCard',
//   component: OverlappingCard,
//   componentPath: '../src/components/OverlappingCard/OverlappingCard.tsx',
//   dataHook: 'storybook-OverlappingCard',
//   sections: [
//     header({
//       sourceUrl: 'https://github.com/wix/wix-ui-tpa/tree/master/src/components/OverlappingCard'
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
import Examples from './exampleWithSettingPanel';
import { OverlappingCard, OverlappingCardRatioOptions } from '../';
import { Button } from '../../Button';
import { Text, TYPOGRAPHY } from '../../Text';

const mediaExamples = [
  {
    label: 'image',
    value: (
      <div
        style={{
          background:
            'url("https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_452,h_316,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg") no-repeat center center',
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
  storyName: 'OverlappingCard',
  component: OverlappingCard,
  componentPath: '../OverlappingCard.tsx',
  componentProps: () => ({
    media: mediaExamples[0].value,
    info: infoExample,
    'data-hook': 'storybook-OverlappingCard',
  }),
  exampleProps: {
    media: mediaExamples,
    ratio: Object.keys(OverlappingCardRatioOptions).map(
      key => OverlappingCardRatioOptions[key],
    ),
  },
  examples: <Examples />,
};
