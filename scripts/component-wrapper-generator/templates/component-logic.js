module.exports = {
  useTemplate: (componentName, originalComponentModule, originalExportName) => `
import React from 'react'
import styles from './${componentName}.st.css'
import {${originalExportName === componentName ? componentName : `${originalExportName} as ${componentName}`}} from '${originalComponentModule}'

export const ${componentName}Ext = props => <${componentName} {...props} {...styles('root', {}, props)} />
`
}