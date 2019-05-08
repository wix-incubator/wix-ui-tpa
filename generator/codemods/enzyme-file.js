module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;
  const componentName = ComponentName.toString().toLowerCase();

  root.get().node.program.body.push( `import { ${ComponentName}DriverFactory } from '../components/${ComponentName}/${ComponentName}.driver';
export const ${componentName}TestkitFactory: (
  obj: WrapperData,
) => any = enzymeUniTestkitFactoryCreator(${componentName}DriverFactory);`);

  return root.toSource();
};
