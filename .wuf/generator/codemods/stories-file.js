module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;

  const foobar = root.find(j.ImportDeclaration);

  console.log('adler', 'stories-file.js:9', foobar);

  root.get().node.program.body.push( `require('../src/components/${ComponentName}/docs/index.story');`);

  return root.toSource();
};
