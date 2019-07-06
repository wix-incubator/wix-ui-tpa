import * as React from 'react';
import * as ExtendedRawSource from '!raw-loader!./TextButtonWithStylesExample.tsx';
import * as ExtendedMobileRawSource from '!raw-loader!./TextButtonWithStylesMobileExample.tsx';
import * as ExtendedCSSRaw from '!raw-loader!./TextButtonWithStylesExample.st.css';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import CodeExample from 'wix-storybook-utils/CodeExample';
import { TextButtonWithStylesExample } from './TextButtonWithStylesExample';
import { TextButtonWithStylesMobileExample } from './TextButtonWithStylesMobileExample';

export const importExample = `import { TextButton } from 'wix-ui-tpa/TextButton';`;

export const StyledExample = () => (
  <div>
    <div className="tpa-container">
      <CodeExample
        title="Text Button"
        code={[
          '//.st.css',
          ExtendedCSSRaw,
          '',
          '//.tsx',
          ExtendedRawSource,
        ].join('\n')}
      >
        <TextButtonWithStylesExample />
      </CodeExample>
      <CodeExample
        title="Mobile Text Button"
        code={[
          '//.st.css',
          ExtendedCSSRaw,
          '',
          '//.tsx',
          ExtendedMobileRawSource,
        ].join('\n')}
      >
        <TextButtonWithStylesMobileExample />
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[
        {
          label: 'Text Button Color',
          wixParam: 'textButtonTextColor',
          defaultColor: 'color-5',
        },
      ]}
      wixFontParams={[
        {
          label: 'Text Button Font',
          wixParam: 'textButtonTextFont',
          defaultFont: 'arial',
        },
      ]}
    />
  </div>
);
