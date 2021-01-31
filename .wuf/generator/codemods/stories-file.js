module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;

  root.find(j.ImportDeclaration).forEach(p => {
    console.log('adler', 'stories-file.js:8', p);
  })

  root.get().node.program.body.push( `require('../src/components/${ComponentName}/docs/index.story');`);

  return root.toSource();
};
