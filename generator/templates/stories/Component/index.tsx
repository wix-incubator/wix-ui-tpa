import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./{%ComponentName%}ExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./{%ComponentName%}ExtendedExample.st.css';
import { {%ComponentName%}ExtendedExample } from './{%ComponentName%}ExtendedExample';
import { MockSettings } from '../helperComponents/MockSettings';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample title="{%ComponentName%} Extended"
                   code={['//.st.css', ExtendedCSSRawSource, '', '//.tsx', ExtendedRawSource].join('\n')}>
        <{%ComponentName%}ExtendedExample dataHook="some data hook" buttonText="Click Me!"/>
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[{
        label: 'Background Color',
        wixParam: 'inputBackgroundColor',
        defaultColor: 'color-1'
      }, {
        label: 'Text Color',
        wixParam: 'inputTextColor',
        defaultColor: 'color-5'
      }, {
        label: 'Border Color',
        wixParam: 'inputBorderColor',
        defaultColor: 'color-5'
      }]}
      wixFontParams={[{
        label: 'Font',
        wixParam: 'textFont',
        defaultFont: 'arial'
      }]}/>
  </div>
);
