import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./TabsExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./TabsExtendedExample.st.css';
import {TabsExtendedExample} from './TabsExtendedExample';
import {MockSettings} from '../helperComponents/MockSettings';

const items = [
  {id: 'some-id-1', title: 'Title 1', dataHook: 'tab-item-1'},
  {id: 'some-id-2', title: 'Title 2' , dataHook: 'tab-item-2'},
  {id: 'some-id-3', title: 'Title 3' , dataHook: 'tab-item-3'},
];

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample title="Tabs Extended"
                   code={['//.st.css', ExtendedCSSRawSource, '', '//.tsx', ExtendedRawSource].join('\n')}>
        <TabsExtendedExample items={items} activeId={items[0].id}></TabsExtendedExample>
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[{
        label: 'Tab Text Color',
        wixParam: 'textColor',
        defaultColor: 'color-5'
      },
      {
        label: 'Selected Tab Border Color',
        wixParam: 'selectedTabBorderColor',
        defaultColor: 'color-8'
      },
      {
        label: 'UnSelected Tab Border Color',
        wixParam: 'unselectedTabBorderColor',
        defaultColor: 'color-5'
      }]}
      wixFontParams={[{
        label: 'Tab Text Font',
        wixParam: 'textFont',
        defaultFont: 'arial'
      }]}/>
  </div>
);
