module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;

  root.get().node.program.body.push( `export { ${ComponentName} } from './${ComponentName}';`);

  return root.toSource();
};
