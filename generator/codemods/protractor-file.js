module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;
  const componentName = ComponentName.toString().toLowerCase();

  root.get().node.program.body.push( `import { ${componentName}DriverFactory } from '../components/${ComponentName}/${ComponentName}.driver';
export const ${componentName}TestkitFactory = protractorUniTestkitFactoryCreator(
  ${componentName}DriverFactory,
);`);

  return root.toSource();
};
