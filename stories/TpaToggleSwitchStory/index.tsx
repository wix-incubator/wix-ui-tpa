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
          <TpaToggleSwitchExample/>
        </CodeExample>
        <CodeExample title="Toggle Switch Extension Example" code={['//st.css:', CssSource, '', '//Code:', RawSourceExtended].join('\n')}>
          <TpaToggleSwitchExtensionExample/>
        </CodeExample>
        <ColorPalettePicker wixParams={[{label: 'Selected', wixParam: 'runtimeSettings1'}, {label: '4fff', wixParam: 'runtimeSettings2'}]}/>
      </div>

      <Markdown source={Readme}/>
    </TabbedView>);
