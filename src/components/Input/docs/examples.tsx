import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./InputExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./InputExtendedExample.st.css';
import { InputExtendedExample } from './InputExtendedExample';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Input Extended"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <InputExtendedExample placeholder="Some text here" />
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[
        {
          label: 'Background Color',
          wixParam: 'inputBackgroundColor',
          defaultColor: 'color-1',
        },
        {
          label: 'Text Color',
          wixParam: 'inputTextColor',
          defaultColor: 'color-5',
        },
        {
          label: 'Border Color',
          wixParam: 'inputBorderColor',
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
