module.exports = (file, api, options) => {
  const { jscodeshift } = api;
  const { ComponentName } = options;

  const root = jscodeshift(file.source);
  const pushNewValue = (name, value, size) => {
    const list = root.find(jscodeshift.VariableDeclaration, {
      declarations: [{ id: { name } }],
    });

    const newValue = jscodeshift.arrayExpression([
      jscodeshift.literal(value),
      jscodeshift.numericLiteral(size),
    ]);

    list.get(0).node.declarations[0].init.elements.push(newValue);
  };

  pushNewValue('files', `${ComponentName}.bundle.min.js`, 5);

  return root.toSource({ quote: 'single', trailingComma: true });
};
