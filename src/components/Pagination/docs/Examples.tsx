import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';

import * as ExtendedRawSource from '!raw-loader!./PaginationExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./PaginationExtendedExample.st.css';
import { PaginationExtendedExample } from './PaginationExtendedExample';
import { TPAComponentsProvider } from '../../TPAComponentsConfig';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Pagination"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <TPAComponentsProvider value={{ rtl: false, mobile: false }}>
          <PaginationExtendedExample />
        </TPAComponentsProvider>
        <br />
        <TPAComponentsProvider value={{ rtl: true, mobile: false }}>
          <p>RTL</p>
          <PaginationExtendedExample />
        </TPAComponentsProvider>
      </CodeExample>
    </div>
    <div className="tpa-container">
      <CodeExample
        title="Pagination Mobile"
        code={[
          '//.st.css',
          ExtendedCSSRawSource,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <TPAComponentsProvider value={{ rtl: false, mobile: true }}>
          <PaginationExtendedExample />
        </TPAComponentsProvider>
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[
        {
          label: 'Pages Font Color',
          wixParam: 'textFontColor',
          defaultColor: 'color-5',
        },
        {
          label: 'Selected Page Color',
          wixParam: 'selectedTextFontColor',
          defaultColor: 'color-8',
        },
        {
          label: 'Disabled Buttons Color',
          wixParam: 'disabledTextFontColor',
          defaultColor: 'color-3',
        },
      ]}
      wixFontParams={[
        {
          label: 'Pages Font',
          wixParam: 'textFont',
          defaultFont: 'arial',
        },
      ]}
    />
  </div>
);
