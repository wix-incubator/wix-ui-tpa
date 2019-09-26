import * as React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import { MockSettings } from '../helperComponents/MockSettings';

export function settingsPanel({
  example,
  rawSource,
  rawCSSSource,
  title,
  params,
}) {
  const wixNumberParams = params.numbers || [];
  const wixColorParams = params.colors || [];
  const wixFontParams = params.fonts || [];

  return (
    <div>
      <div className="tpa-container">
        <CodeExample
          title={title}
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
