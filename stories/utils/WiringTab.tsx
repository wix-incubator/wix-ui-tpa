import * as React from 'react';
import { safeParse, StylableProcessor, processNamespace } from '@stylable/core';
import CodeExample from 'wix-storybook-utils/CodeExample';
import { MockSettings } from '../helperComponents/MockSettings';

export function WiringTab({ component, css }) {
  try {
    const root = safeParse(safeParse(css));
    const meta = new StylableProcessor(undefined, processNamespace).process(
      root,
    );

    const styleParams = meta.vars.reduce(
      (acc, item) => {
        const { text, name } = item;

        if (text === '--overridable') {
          const lcName = name.toLowerCase();

          if (lcName.indexOf('color') > -1) {
            acc.colors.push(item);
          } else if (lcName.indexOf('font') > -1) {
            acc.fonts.push(item);
          } else if (lcName.indexOf('width') > -1) {
            acc.numbers.push(item);
          }
        }

        return acc;
      },
      { colors: [], fonts: [], numbers: [] },
    );

    const wixNumberParams = styleParams.numbers;
    const wixColorParams = styleParams.colors;
    const wixFontParams = styleParams.fonts;

    return (
      <div>
        <div className="tpa-container">
          <CodeExample
            title={'foobar'}
            // code={['//.st.css', css, '', '//.tsx',].join('\n')}
          >
            {component}
          </CodeExample>
        </div>
        <MockSettings
          wixNumberParams={wixNumberParams}
          wixColorParams={wixColorParams}
          wixFontParams={wixFontParams}
        />
      </div>
    );
  } catch (e) {
    console.log('adler', 'WiringTab.tsx:15', e);
  }
}
