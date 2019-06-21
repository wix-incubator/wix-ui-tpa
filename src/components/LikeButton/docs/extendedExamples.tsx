import * as React from 'react';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./LikeButtonExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./LikeButtonExtendedExample.st.css';
import { LikeButtonExtendedExample } from './LikeButtonExtendedExample';

export default () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Like Button"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <LikeButtonExtendedExample />
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[
        {
          label: 'Icon Color',
          wixParam: 'iconColor',
          defaultColor: 'color-5',
        },
        {
          label: 'Label Color',
          wixParam: 'labelColor',
          defaultColor: 'color-5',
        },
      ]}
      wixFontParams={[
        {
          label: 'Label Font',
          wixParam: 'labelFont',
          defaultFont: 'arial',
        },
      ]}
    />
  </div>
);
