import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./DividerExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./DividerExtendedExample.st.css';

import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import { DividerExtendedExample } from './DividerExtendedExample';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Divider Extended"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <DividerExtendedExample />
      </CodeExample>
    </div>
    <MockSettings
      wixNumberParams={[
        {
          label: 'Width',
          wixParam: 'dividerWidth',
          defaultNumber: 1,
          unit: 'px',
        },
      ]}
      wixColorParams={[
        {
          label: 'Color',
          wixParam: 'dividerColor',
          defaultColor: 'color-5',
        },
      ]}
    />
  </div>
);
