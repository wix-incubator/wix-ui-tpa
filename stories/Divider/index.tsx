import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./DividerExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./DividerExtendedExample.st.css';
import {ColorPalettePicker} from '../helperComponents/ColorPalettePicker';
import {NumberPicker} from '../helperComponents/NumberPicker';
import {DividerExtendedExample} from './DividerExtendedExample';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample title="Divider Extended"
                   code={['//.st.css', ExtendedCSSRawSource, '', '//.tsx', ExtendedRawSource].join('\n')}>
        <DividerExtendedExample/>
      </CodeExample>
    </div>
    <ColorPalettePicker wixParams={[{
      label: 'Color',
      wixParam: 'dividerColor',
      defaultColor: 'color-5'
    }]}/>
    <NumberPicker wixParams={[{
      label: 'Width',
      wixParam: 'dividerWidth',
      defaultNumber: 1,
      unit: 'px'
    }]}/>

  </div>
);
