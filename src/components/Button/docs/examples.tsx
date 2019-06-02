import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRaw from '!raw-loader!./ButtonExtendedExample.tsx';
import * as ExtendedRawWithStyleParams from '!raw-loader!./ButtonExtendedWithStyleParamsExample.tsx';

import * as ExtendedCSSRaw from '!raw-loader!./ButtonExtendedExample.st.css';
import * as ExtendedCSSRawWithStyleParams from '!raw-loader!./ButtonExtendedWithStyleParamsExample.st.css';

import { ButtonExtendedExample } from './ButtonExtendedExample';
import { ButtonExtendedWithStyleParamsExample } from './ButtonExtendedWithStyleParamsExample';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Button Extended"
        code={['//.st.css', ExtendedCSSRaw, '', '//.tsx', ExtendedRaw].join(
          '\n',
        )}
      >
        <ButtonExtendedExample>some text</ButtonExtendedExample>
      </CodeExample>
    </div>
    <div className="tpa-container">
      <CodeExample
        title="Button with style params"
        code={[
          '//.st.css',
          ExtendedCSSRawWithStyleParams,
          '',
          '//.tsx',
          ExtendedRawWithStyleParams,
        ].join('\n')}
      >
        <ButtonExtendedWithStyleParamsExample>
          some text
        </ButtonExtendedWithStyleParamsExample>
      </CodeExample>
    </div>
    <MockSettings
      wixNumberParams={[
        {
          label: 'Border Width',
          wixParam: 'borderWidth',
          defaultNumber: 0,
          unit: 'px',
        },
        {
          label: 'Border Radius',
          wixParam: 'borderRadius',
          defaultNumber: 0,
          unit: 'px',
        },
      ]}
      wixFontParams={[
        {
          label: 'Font',
          wixParam: 'buttonTextFont',
          defaultFont: 'arial',
        },
      ]}
      wixColorParams={[
        {
          label: 'Text Color',
          wixParam: 'buttonTextColor',
          defaultColor: 'color-1',
        },
        {
          label: 'Background Color',
          wixParam: 'buttonBackgroundColor',
          defaultColor: 'color-5',
        },
        {
          label: 'Border Color',
          wixParam: 'borderColor',
          defaultColor: 'color-8',
        },
      ]}
    />
  </div>
);
