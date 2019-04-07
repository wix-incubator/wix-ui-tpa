import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./TabsExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./TabsExtendedExample.st.css';
import {TabsExtendedExample} from './TabsExtendedExample';
import {MockSettings} from '../helperComponents/MockSettings';

const items = [
  {title: 'Title 1'},
  {title: 'Title 2'},
  {title: 'Title 3'},
  {title: 'Title 4'},
];

export const Examples = () => (
  <div>
    <div className="tpa-container">
      <CodeExample title="Tabs Extended"
                   code={['//.st.css', ExtendedCSSRawSource, '', '//.tsx', ExtendedRawSource].join('\n')}>
        <TabsExtendedExample items={items} activeTabIndex={0}></TabsExtendedExample>
      </CodeExample>
    </div>
    <MockSettings
      wixColorParams={[{
        label: 'Tab Text Color',
        wixParam: 'textColor',
        defaultColor: 'color-5'
      },
      {
        label: 'Selected Tab Indicator Border Color',
        wixParam: 'selectedTabIndicatorColor',
        defaultColor: 'color-8'
      },
      {
        label: 'Indicator Border Color',
        wixParam: 'indicatorColor',
        defaultColor: 'color-5'
      }]}
      wixFontParams={[{
        label: 'Tab Text Font',
        wixParam: 'textFont',
        defaultFont: 'arial'
      }]}/>
  </div>
);
