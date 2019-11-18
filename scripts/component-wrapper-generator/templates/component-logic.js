module.exports = {
  useTemplate: (componentName, originalComponentModule, originalExportName) => `import * as React from 'react';
import styles from './${componentName}.st.css';
import { ${originalExportName} as ${componentName}Orig } from '${originalComponentModule}';

export const ${componentName} = props => (
  <${componentName}Orig {...props} {...styles('root', {}, props)} />
);
`
}
