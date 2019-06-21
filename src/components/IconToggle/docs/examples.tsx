import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./IconToggleExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./IconToggleExtendedExample.st.css';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import { IconToggleExtendedExample } from './IconToggleExtendedExample';

export default () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Icon Toggle"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <IconToggleExtendedExample />
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
