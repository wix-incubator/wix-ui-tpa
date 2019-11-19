const path = require('path')
const fs = require('fs')
const config = require('./config.json')
const parser = require('./parser')

const MANIFEST_PATH = path.resolve(__dirname, '../..', 'ui-tpa-manifest.json')
const COMPONENTS_ROOT = path.resolve(__dirname, '../..', 'src', 'components')
const COMPONENT_NAME_REGEXP = /^[A-Z][A-Za-z0-9_]*$/

const componentNames = fs.readdirSync(COMPONENTS_ROOT).filter(
  item => item.match(COMPONENT_NAME_REGEXP)
)

let manifest = {}

for ( const componentName of componentNames ) {
  if (config.ignoreComponents.includes(componentName)) {
    continue
  }

  const stylePath = `${componentName}/${componentName}.st.css`

  const possibleLogicFilePaths = ['js','jsx','ts','tsx'].map(
    extension => path.resolve(COMPONENTS_ROOT, componentName, `index.${extension}`)
  )
  
  const fullStylePath = path.resolve(COMPONENTS_ROOT, stylePath)

  const logicFound = possibleLogicFilePaths.find(filePath => fs.existsSync(filePath))
  const styleFound = fs.existsSync(fullStylePath)

  if (!logicFound) {
    continue
  }

  const alteredFlags = (
    config.alterComponents[componentName] &&
    config.alterComponents[componentName].flags
  ) || {}

  const alteredEntries = (
    config.alterComponents[componentName] &&
    config.alterComponents[componentName].entries
  ) || {}

  const alteredComponentEntry = (
    alteredEntries &&
    alteredEntries.component
  ) || {}

  const alteredStyleEntry = (
    alteredEntries &&
    alteredEntries.style
  ) || {}

  if ( styleFound ) {
    parser.parse(fullStylePath)

    // TODO: Not finished
  }

  manifest[componentName] = {
    flags: {
      needExampleWrapper: true,
      ...alteredFlags
    },
    entries: {
      component: {
        module: componentName,
        exportName: componentName,
        ...alteredComponentEntry
      },
      ...styleFound ? {
        style: {
          path: "TextArea/TextArea.st.css",
          ...alteredStyleEntry
        }
      } : Object.keys(alteredStyleEntry) ? {
        style: alteredStyleEntry
      } : {}
    },
    ...styleFound ? {
      stylable: {
        variables: []
      }
    } : {}
  }
}

manifest = {...manifest, ...config.useComponents}

console.log(manifest)

// TODO: Not finished
