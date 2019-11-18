const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const getLogicSource = require('./templates/component-logic').useTemplate
const getStyleSource = require('./templates/component-style').useTemplate

const COMPONENT_MODULE_NAME = 'wix-ui-tpa'
const MANIFEST_NAME = 'ui-tpa-manifest.json'
const EXAMPLE_OUTPUT_PATH = path.resolve(__dirname, '../..', 'src', 'generated', 'examples')
const COMPONENTS_PATH = '../../../components'

const getOriginalComponentModule = componentManifest =>
  `${COMPONENTS_PATH}/${componentManifest.entries.component.module}`

const getOriginalComponentStyleFile = componentManifest =>
  `${COMPONENTS_PATH}/${componentManifest.entries.style.path}`

const getVariablesArray = (componentName, componentManifest) => {
  const variables = {}

  componentManifest.stylable.variables.forEach(variableManifest => {
    variables[variableManifest.name] = `--${componentName}-${variableManifest.name}`
  })

  return variables
}

const manifest = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../..', MANIFEST_NAME)
  )
)

Object.entries(manifest).forEach(([componentName, componentManifest]) => {
  if (componentManifest.flags.needExampleWrapper) {
    process.stdout.write(`Generating wrapper for "${componentName}"...`)

    const generatedComponentPath = path.resolve(EXAMPLE_OUTPUT_PATH, componentName)

    mkdirp.sync(generatedComponentPath)

    const logicSource = getLogicSource(
      componentName,
      getOriginalComponentModule(componentManifest),
      componentManifest.entries.component.exportName
    )

    const logicFilePath = path.resolve(generatedComponentPath, `index.tsx`)
    const logicExampleFilePath = path.resolve(generatedComponentPath, `index.example.tsx`)

    const styleSource = getStyleSource(
      getOriginalComponentStyleFile(componentManifest),
      getVariablesArray(componentName, componentManifest)
    )

    const styleFilePath = path.resolve(generatedComponentPath, `${componentName}.st.css`)
    const styleExampleFilePath = path.resolve(generatedComponentPath, `${componentName}.example.st.css`)

    const examplePathReplacementRule = new RegExp(COMPONENTS_PATH.replace(/\./g, '\\.'), 'g')

    const logicExampleSource = logicSource.replace(examplePathReplacementRule, COMPONENT_MODULE_NAME)
    const styleExampleSource = styleSource.replace(examplePathReplacementRule, COMPONENT_MODULE_NAME)

    fs.writeFileSync(logicFilePath, logicSource, {encoding: 'utf8'})
    fs.writeFileSync(styleFilePath, styleSource, {encoding: 'utf8'})
    fs.writeFileSync(logicExampleFilePath, logicExampleSource, {encoding: 'utf8'})
    fs.writeFileSync(styleExampleFilePath, styleExampleSource, {encoding: 'utf8'})

    process.stdout.write(' Done!\n')
  }
})
