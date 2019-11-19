import * as React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import {
  IWixColorParam,
  IWixFontParam,
  IWixNumberParam,
  MockSettings,
} from '../helperComponents/MockSettings';
import Markdown from 'wix-storybook-utils/Markdown';
import {
  IComponentManifest,
  VariableType,
  IVariableManifest,
} from './manifest.interface';

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

export function autoSettingsPanel(
  componentName: string,
  componentManifest: IComponentManifest,
) {
  const { variables } = componentManifest.stylable;

  const numbers = Object.values(variables)
    .filter(
      (variableInfo: IVariableManifest) =>
        variableInfo.type === VariableType.number,
    )
    .map((variableInfo: IVariableManifest) => ({
      label: variableInfo.name,
      wixParam: `${componentName}-${variableInfo.name}`,
      defaultNumber: Number(variableInfo.defaultValue),
      unit: '', // TODO: somehow gather this value dynamically
      min: 0, // TODO: somehow gather this value dynamically
      max: 100, // TODO: somehow gather this value dynamically
    }));

  const fonts = Object.values(variables)
    .filter(
      (variableInfo: IVariableManifest) =>
        variableInfo.type === VariableType.font,
    )
    .map((variableInfo: IVariableManifest) => ({
      label: variableInfo.name,
      wixParam: `${componentName}-${variableInfo.name}`,
      defaultFont: 'arial',
    }));

  const colors = Object.values(variables)
    .filter(
      (variableInfo: IVariableManifest) =>
        variableInfo.type === VariableType.color,
    )
    .map((variableInfo: IVariableManifest) => ({
      label: variableInfo.name,
      wixParam: `${componentName}-${variableInfo.name}`,
      defaultColor: variableInfo.defaultValue,
    }));

  const styleExample = require(`!raw-loader!../../src/connected-components/${componentName}/${componentName}.example.st.css`);
  const logicExample = require(`!raw-loader!../../src/connected-components/${componentName}/index.example.tsx`);

  return (
    <div>
      <MockSettings
        wixNumberParams={numbers}
        wixColorParams={colors}
        wixFontParams={fonts}
      />
      <Markdown
        source={[
          '#### .st.css',
          '```css',
          styleExample,
          '```',
          '#### .tsx',
          '```javascript',
          logicExample,
          '```',
        ].join('\n')}
      />
    </div>
  );
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
