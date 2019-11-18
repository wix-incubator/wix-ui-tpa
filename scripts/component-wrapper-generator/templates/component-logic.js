module.exports = {
  useTemplate: (componentName, originalComponentModule, originalExportName) => `
import React from 'react'
import styles from './${componentName}.st.css'
import {${originalExportName} as ${componentName}} from '${originalComponentModule}'

export const ${componentName}Ext = props => React.createElement(${componentName}, {...props, ...styles('root', {}, props)})
`
}