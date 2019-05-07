import * as React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExtendedRawSource from '!raw-loader!./TabsExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./TabsExtendedExample.st.css';
import { TabsExtendedExample } from './TabsExtendedExample';
import { MockSettings } from '../helperComponents/MockSettings';
import * as MobileRawSource from '!raw-loader!./TabsMobileExample.tsx';
import { TabsMobileExample } from './TabsMobileExample';

const items = [
  { title: 'Title 1' },
  { title: 'Title 2' },
  { title: 'Title 3' },
  { title: 'Title 4' },
];

export const Examples = () => {
  const [tabIndex1, setTabIndex1] = React.useState(0);
  const [tabIndex2, setTabIndex2] = React.useState(0);

  return (
    <div>
      <div className="tpa-container">
        <CodeExample
          title="Tabs Extended"
          code={[
            '//.st.css',
            ExtendedCSSRawSource,
            '',
            '//.tsx',
            ExtendedRawSource,
          ].join('\n')}
        >
          <TabsExtendedExample
            items={items}
            activeTabIndex={tabIndex1}
            onTabClick={index => setTabIndex1(index)}
          />
        </CodeExample>
      </div>
      <div>
        <div className="tpa-container">
          <CodeExample
            title="Tabs Mobile"
            code={[
              '//.st.css',
              ExtendedCSSRawSource,
              '',
              '//.tsx',
              MobileRawSource,
            ].join('\n')}
          >
            <TabsMobileExample
              items={items}
              activeTabIndex={tabIndex2}
              onTabClick={index => setTabIndex2(index)}
            />
          </CodeExample>
        </div>
        <MockSettings
          wixColorParams={[
            {
              label: 'Tab Text Color',
              wixParam: 'textColor',
              defaultColor: 'color-5',
            },
            {
              label: 'Selected Tab Indicator Border Color',
              wixParam: 'selectedTabIndicatorColor',
              defaultColor: 'color-8',
            },
            {
              label: 'Indicator Border Color',
              wixParam: 'indicatorColor',
              defaultColor: 'color-5',
            },
          ]}
          wixFontParams={[
            {
              label: 'Tab Text Font',
              wixParam: 'textFont',
              defaultFont: 'arial',
            },
          ]}
        />
      </div>
    </div>
  );
};
