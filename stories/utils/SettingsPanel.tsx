import * as React from 'react';
import { safeParse, StylableProcessor, processNamespace } from '@stylable/core';
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

  try {
    // const root = safeParse(safeParse(css));
    // const meta = new StylableProcessor(undefined, processNamespace).process(root);
    //
    // if (css) {
    //   console.log('adler', 'SettingsPanel.tsx:19', title, meta.vars);
    // }
  } catch (e) {
    // console.log('adler', 'SettingsPanel.tsx:26', e);
  }

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
