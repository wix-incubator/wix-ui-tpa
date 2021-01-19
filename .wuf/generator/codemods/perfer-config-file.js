module.exports = (file, api, options) => {
  const { jscodeshift } = api;
  const { ComponentName } = options;

  const fileBundlesToAdd = [
    `${ComponentName}.bundle.min.js`,
    `${ComponentName}PerfBasic.bundle.min.js`
    `${ComponentName}PerfExtended.bundle.min.js`
  ]

  const root = jscodeshift(file.source);

  // The initial KB
  const thresholdSize = 5;

  // Finds the `files` array
  const array = root.find(jscodeshift.VariableDeclaration, {
    declarations: [{ id: { name: 'files' } }],
  });

  // Creates new entry to be inserted
  fileBundlesToAdd.forEach(fileBundleName => {
    const entry = jscodeshift.arrayExpression([
      jscodeshift.literal(fileBundleName),
      jscodeshift.numericLiteral(thresholdSize),
    ]);

    // Pushes the entry into the array
    array.get(0).node.declarations[0].init.elements.push(entry);
  });

  // Formatting
  return root.toSource({
    quote: 'single',
    trailingComma: true,
  });
};
