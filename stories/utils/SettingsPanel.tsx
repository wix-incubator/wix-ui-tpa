import * as React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import {
  IWixColorParam,
  IWixFontParam,
  IWixNumberParam,
  MockSettings,
} from '../helperComponents/MockSettings';
import Markdown from 'wix-storybook-utils/Markdown';
import { VariableType, IVariableManifest } from './variableInfo.interface';
import { plugin } from 'wix-storybook-utils/Sections';

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

export const autoSettingsPanel = () =>
  plugin({
    handler: (section, storyConfig) => {
      const componentName = storyConfig.storyName;

      const variables = storyConfig.metadata.stylable.overridableVars;

      const numbers = Object.values(variables)
        .filter(
          (variableInfo: IVariableManifest) =>
            variableInfo.type === VariableType.number,
        )
        .map((variableInfo: IVariableManifest) => ({
          label: variableInfo.name,
          wixParam: `${componentName}-${variableInfo.name}`,
          defaultNumber: Number(variableInfo.defaultValue),
          unit: variableInfo.unit || '',
          min: Number(variableInfo.min) || 0,
          max: Number(variableInfo.max) || 100,
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
        .map((variableInfo: IVariableManifest) => {
          const colorMatch = variableInfo.defaultValue.match(/color-[0-9]+/);
          const defaultColor = colorMatch ? colorMatch[0] : 'color-1';

          return {
            label: variableInfo.name,
            wixParam: `${componentName}-${variableInfo.name}`,
            defaultColor,
          };
        });

      // const styleExample = require(`!raw-loader!../../src/connected-components/${componentName}/${componentName}.example.st.css`);
      // const logicExample = require(`!raw-loader!../../src/connected-components/${componentName}/index.example.tsx`);

      return (
        <div>
          <MockSettings
            wixNumberParams={numbers}
            wixColorParams={colors}
            wixFontParams={fonts}
          />
          {/* <Markdown
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
          /> */}
        </div>
      );
    },
  });

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
          code={[
            '//.st.css',
            (rawCSSSource as any).default,
            '',
            '//.tsx',
            (rawSource as any).default,
          ].join('\n')}
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
