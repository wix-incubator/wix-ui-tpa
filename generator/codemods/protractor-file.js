module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;
  const componentName = ComponentName.charAt(0).toLowerCase() + ComponentName.substr(1);

  root.get().node.program.body.push( `import { ${componentName}DriverFactory } from '../components/${ComponentName}/${ComponentName}.driver';
export const ${componentName}TestkitFactory = protractorUniTestkitFactoryCreator(
  ${componentName}DriverFactory,
);`);

  return root.toSource();
};

module.exports.parser = "babylon";
