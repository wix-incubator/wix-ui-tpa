import * as React from 'react';

import {storiesOf} from '@storybook/react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./CheckboxExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./CheckboxExtendedExample.st.css';
import {ColorPalettePicker} from '../helperComponents/ColorPalettePicker';
import {CheckboxExtendedExample} from './CheckboxExtendedExample';

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample title="Checkbox Extended"
                   code={['//.st.css', ExtendedCSSRawSource, '', '//.tsx', ExtendedRawSource].join('\n')}>
        <CheckboxExtendedExample labelText="Checkbox"/>
      </CodeExample>
    </div>
    <ColorPalettePicker wixParams={[{
      label: 'Background Color',
      wixParam: 'checkboxBackgroundColor',
      defaultColor: 'color-1'
    }, {
      label: 'Text Color',
      wixParam: 'checkboxTextColor',
      defaultColor: 'color-5'
    }]}/>
  </div>
);
