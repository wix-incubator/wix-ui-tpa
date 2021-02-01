module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const { ComponentName } = options;
  const requireStatement = `require('../src/components/${ComponentName}/docs/index.story');`;
  const root = j(file.source);
  const requireCalls = root.find(j.ExpressionStatement, {
    expression: {
      type: "CallExpression",
      callee: {
        type: "Identifier",
        name: "require"
      }
    }
  });

  let prev = null;
  let first = null;

  requireCalls.forEach((p) => {
    const currentFilePath = p.node.expression.arguments[0].value.replace("/docs/index.story", "");
    if (currentFilePath.indexOf("src/components") > -1) {
      if (!first) {
        first = p;
      }
      const currentCompName = currentFilePath.substr(currentFilePath.lastIndexOf("/") + 1);

      if (currentCompName.toLowerCase() < ComponentName.toLowerCase()) {
        prev = p;
      }
    }
  });

  if (prev !== null) {
    prev.insertAfter(requireStatement);
  } else if (first) {
    first.insertBefore(requireStatement);
  }

  return root.toSource();
};
