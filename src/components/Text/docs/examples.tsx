import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./TextExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./TextExtendedExample.st.css';
import { TextExtendedExample } from './TextExtendedExample';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Text Extended"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <TextExtendedExample>some text</TextExtendedExample>
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[
        {
          label: 'Text Color',
          wixParam: 'textColor',
          defaultColor: 'color-5',
        },
      ]}
      wixFontParams={[
        {
          label: 'Font',
          wixParam: 'textFont',
          defaultFont: 'arial',
        },
      ]}
    />
  </div>
);
