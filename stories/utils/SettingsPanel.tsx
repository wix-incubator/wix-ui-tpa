import * as React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import {
  IWixColorParam,
  IWixFontParam,
  IWixNumberParam,
  MockSettings,
} from '../helperComponents/MockSettings';

interface ISettingsPanelConfig {
  example: JSX.Element;
  params: {
    numbers?: IWixNumberParam[];
    colors?: IWixColorParam[];
    fonts?: IWixFontParam[];
  };
  rawSource: typeof import('*.tsx');
  rawCSSSource: typeof import('*.st.css');
  title: string;
}

export function settingsPanel({
  example,
  rawSource,
  rawCSSSource,
  title,
  params: { colors = [], numbers = [], fonts = [] },
}: ISettingsPanelConfig) {
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
        wixNumberParams={numbers}
        wixColorParams={colors}
        wixFontParams={fonts}
      />
    </div>
  );
}
