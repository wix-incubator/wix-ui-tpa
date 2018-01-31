import * as React from 'react';

import {storiesOf} from '@storybook/react';

import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import * as Readme from '../../src/components/Input/README.md';
import * as RawSource from '!raw-loader!./InputExample.tsx';
import {InputExample} from './InputExample';
import {ColorPalettePicker} from '../helperComponents/ColorPalettePicker';

storiesOf('Components', module)
  .add('TpaInput', () =>
    <TabbedView tabs={['API', 'Readme']}>
      <div>
        <div className="tpa-container">
          <CodeExample title="Input Raw" code={RawSource}>
            <InputExample/>
          </CodeExample>
          <CodeExample title="Input Extended" code={RawSource}>
            <InputExample/>
          </CodeExample>
        </div>
        <ColorPalettePicker wixParams={[{
          label: 'TBD',
          wixParam: 'TBD',
          defaultColor: 'color-23'
        }]}/>
      </div>
      <Markdown source={Readme}/>
    </TabbedView>);
