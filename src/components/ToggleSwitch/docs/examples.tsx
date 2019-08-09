import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ToggleSwitchExampleRaw from '!raw-loader!./ToggleSwitchExample.tsx';
import * as ToggleSwitchExtensionExampleRaw from '!raw-loader!./ToggleSwitchExtensionExample.tsx';

import { ToggleSwitchExample } from './ToggleSwitchExample';
import { ToggleSwitchExtensionExample } from './ToggleSwitchExtensionExample';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';

import style from './examples.st.css';

export const Examples = () => (
  <div {...style('root', {})}>
    <div className="tpa-container">
      <CodeExample
        title="Base Example"
        code={['//.tsx', ToggleSwitchExampleRaw].join('\n')}
      >
        <ToggleSwitchExample />
      </CodeExample>
    </div>

    <div className="tpa-container">
      <CodeExample
        title="Base Extension Example"
        code={['//.tsx', ToggleSwitchExtensionExampleRaw].join('\n')}
      >
        <ToggleSwitchExtensionExample />
      </CodeExample>
    </div>

    <MockSettings
      wixColorParams={[
        {
          label: 'BaseColor',
          wixParam: 'runtimeSettings1',
          defaultColor: 'color-2',
        },
        {
          label: 'SelectedColor',
          wixParam: 'runtimeSettings2',
          defaultColor: 'color-23',
        },
      ]}
    />
  </div>
);
