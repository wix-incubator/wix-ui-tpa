import * as React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import { MockSettings } from '../helperComponents/MockSettings';

export function settingsPanel({ example, rawSource, rawCSSSource, params }) {
  const wixNumberParams = params.numbers || [];
  const wixColorParams = params.colors || [];
  const wixFontParams = params.fonts || [];

  return (
    <div>
      <div className="tpa-container">
        <CodeExample
          title="Card Extended"
          code={['//.st.css', rawCSSSource, '', '//.tsx', rawSource].join('\n')}
        >
          {example}
        </CodeExample>
      </div>
      <MockSettings
        wixNumberParams={wixNumberParams}
        wixColorParams={wixColorParams}
        wixFontParams={wixFontParams}
      />
    </div>
  );
}
