import * as React from 'react';
import { genericApiTable, IGenericApiItem } from './GenericApi';
import { description, tab } from 'wix-storybook-utils/Sections';

interface ISettingsApiVariable extends IGenericApiItem {
  name: string;
  dataType: string;
  defaultValue: string;
  description: string;
}

interface ISettingsApiConfig {
  componentName: string;
  variables: ISettingsApiVariable[];
}

export const settingsApiTab = ({
  variables,
  componentName,
}: ISettingsApiConfig) => {
  return tab({
    title: 'Style API',
    sections: [
      genericApiTable({
        title: 'Stylable Variables',
        columns: {
          name: 'Variable name',
          dataType: 'Value type',
          defaultValue: 'Default value',
          description: 'Description',
        },
        items: variables,
      }),
      description(getExtensionExample(variables, componentName)),
    ],
  });
};

const getExtensionExample = (variables, componentName) => `
#### Usage

In order to connect to settings, you can extend component like this:

${componentName}Ext.st.css
\`\`\`css
  :import {
    -st-from: "wix-ui-tpa/${componentName}/${componentName}.st.css";
    -st-default: TPA${componentName};
  }

  .root {
    -st-mixin: TPAText(
${variables
  .map(variable => `      ${variable.name} '"--someSettingsKey"'`)
  .join(',\n')}
    );
  }
\`\`\`

${componentName}Ext.jsx
\`\`\`javascript
import {${componentName}} from 'wix-ui-tpa/${componentName}';
import styles from './${componentName}Ext.st.css';

const ${componentName}Ext = props => <${componentName} {...props} {...styles('root', {}, props)}/>;
\`\`\`
`;
