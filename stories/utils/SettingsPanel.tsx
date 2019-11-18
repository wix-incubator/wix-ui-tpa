import * as React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import {
  IWixColorParam,
  IWixFontParam,
  IWixNumberParam,
  MockSettings,
} from '../helperComponents/MockSettings';
import manifest from '../../ui-tpa-manifest.json';
import Markdown from 'wix-storybook-utils/Markdown';

const enum VariableType {
  color = 'color',
  font = 'font',
  numnber = 'number',
}

interface IVariableManifest {
  name: string;
  type: VariableType;
  defaultValue: string;
  description: string;
}

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

export function autoSettingsPanel(componentName: string) {
  const componentManifest = manifest[componentName];

  if (!componentManifest) {
    return 'Could not load Settings API';
  }

  const { variables } = componentManifest.stylable;

  // TODO: implement numbers

  /*
    {
      label: 'Today Border Width',
      wixParam: 'TodayMainBorderWidth',
      defaultNumber: 1,
      unit: 'px',
      max: 10,
      min: 0,
    },
  */

  const numbers = [];

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

  const styleExample = require(`!raw-loader!../../src/generated/examples/${componentName}/${componentName}.example.st.css`);
  const logicExample = require(`!raw-loader!../../src/generated/examples/${componentName}/index.example.tsx`);

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
