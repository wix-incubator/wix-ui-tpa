import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./CardExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./CardExtendedExample.st.css';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import { CardExtendedExample } from './CardExtendedExample';

export default () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Card Extended"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <CardExtendedExample />
      </CodeExample>
    </div>
    <MockSettings
      wixNumberParams={[
        {
          label: 'Border Width',
          wixParam: 'borderWidth',
          defaultNumber: 1,
          unit: 'px',
        },
      ]}
      wixColorParams={[
        {
          label: 'Card Background Color',
          wixParam: 'cardBGColor',
          defaultColor: 'color-1',
        },
        {
          label: 'Info Background Color',
          wixParam: 'infoBGColor',
          defaultColor: 'color-1',
        },
        {
          label: 'Image Background Color',
          wixParam: 'imageBGColor',
          defaultColor: 'color-5',
        },
        {
          label: 'Border Color',
          wixParam: 'borderColor',
          defaultColor: 'color-5',
        },
      ]}
    />
  </div>
);
