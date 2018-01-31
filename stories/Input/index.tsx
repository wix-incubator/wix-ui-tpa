import * as React from 'react';

import {storiesOf} from '@storybook/react';

import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import * as Readme from '../../src/components/Input/README.md';
import * as RawSource from '!raw-loader!./InputExample.tsx';
import * as ExtendedRawSource from '!raw-loader!./InputExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./InputExtendedExample.st.css';
import {InputExample} from './InputExample';
import {ColorPalettePicker} from '../helperComponents/ColorPalettePicker';
import {InputExtendedExample} from './InputExtendedExample';

storiesOf('Components', module)
  .add('TpaInput', () =>
    <TabbedView tabs={['API', 'Readme']}>
      <div>
        <div className="tpa-container">
          <CodeExample title="Input Raw" code={RawSource}>
            <InputExample/>
          </CodeExample>
          <CodeExample title="Input Extended" code={['//.st.css', ExtendedCSSRawSource, '', '//.tsx', ExtendedRawSource].join('\n')}>
            <InputExtendedExample value={'Some text here'}/>
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
      <Markdown source={Readme}/>
    </TabbedView>);
