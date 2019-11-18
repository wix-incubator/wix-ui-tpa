module.exports = {
  useTemplate: (originalComponentStyleFile, variables) => `
:import {
  -st-from: "${originalComponentStyleFile}";
  -st-default: TPAMixin;
}

.root {
  -st-mixin: TPAMixin(
${Object.entries(variables).map(([name, value]) => `      ${name} ${value}`).join(',\n')}
  );
}
`
}
