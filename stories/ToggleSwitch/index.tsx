import * as React from 'react';

import {storiesOf} from '@storybook/react';

import TabbedView from 'wix-storybook-utils/TabbedView';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import * as Readme from '../../src/components/ToggleSwitch/README.md';
import {TpaToggleSwitchExample} from './TpaToggleSwitchExample';
import {TpaToggleSwitchExtensionExample} from './TpaToggleSwitchExtensionExample';
import * as RawSource from '!raw-loader!./TpaToggleSwitchExample.tsx';
import * as RawSourceExtended from '!raw-loader!./TpaToggleSwitchExtensionExample.tsx';
import * as CssSource from '!raw-loader!./ToggleSwitchExt.st.css';
import {ColorPalettePicker} from '../helperComponents/ColorPalettePicker';

storiesOf('Components', module)
  .add('TpaToggleSwitch', () =>
    <TabbedView tabs={['API', 'Readme']}>
      <div>
        <CodeExample title="Toggle Switch Raw" code={RawSource}>
          <div className="tpa-container">
            <TpaToggleSwitchExample/>
          </div>
        </CodeExample>
        <CodeExample title="Toggle Switch Extension Example - with app settings"
                     code={['//st.css:', CssSource, '', '//Code:', RawSourceExtended].join('\n')}>
          <div className="tpa-container">
            <TpaToggleSwitchExtensionExample/>
            <h3>You set a new value for disabled color and selected color by picking colors from the color picker</h3>
          </div>
          <ColorPalettePicker wixParams={[{
            label: 'Selected color',
            wixParam: 'runtimeSettings1',
            defaultColor: 'color-23'
          }, {
            label: 'Disabled color',
            wixParam: 'runtimeSettings2',
            defaultColor: 'color-2'
          }]}/>
        </CodeExample>
      </div>

      <Markdown source={Readme}/>
    </TabbedView>);
