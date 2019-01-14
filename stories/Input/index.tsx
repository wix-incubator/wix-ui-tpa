import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./InputExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./InputExtendedExample.st.css';
import {ColorPalettePicker} from '../helperComponents/ColorPalettePicker';
import {InputExtendedExample} from './InputExtendedExample';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample title="Input Extended"
                   code={['//.st.css', ExtendedCSSRawSource, '', '//.tsx', ExtendedRawSource].join('\n')}>
        <InputExtendedExample placeholder="Some text here"/>
      </CodeExample>
    </div>
    <ColorPalettePicker wixParams={[{
      label: 'Background Color',
      wixParam: 'inputBackgroundColor',
      defaultColor: 'color-1'
    }, {
      label: 'Text Color',
      wixParam: 'inputTextColor',
      defaultColor: 'color-5'
    }]}/>
  </div>
);
