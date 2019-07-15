import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import * as ExtendedRawSource from '!raw-loader!./IconButtonExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./IconButtonExtendedExample.st.css';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import { IconButtonExtendedExample } from './IconButtonExtendedExample';

export const Example = () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="IconButton"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <IconButtonExtendedExample />
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[
        {
          label: 'Icon Color',
          wixParam: 'iconColor',
          defaultColor: 'color-5',
        },
      ]}
    />
  </div>
);

export const mobileExample = `
<TPAComponentsProvider value={{mobile: true}}>
  <IconButton />
</TPAComponentsProvider>
`;
