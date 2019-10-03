import * as React from 'react';
import { StyleApiTable } from './StyleApiTable';

// can't import using the `import` statement because of a tslint error in @stylable/core
const {
  safeParse,
  StylableProcessor,
  processNamespace,
} = require('@stylable/core');

const defaultValueRegex = /@default\(([^)]+)\)/;

function findDefaultValue(name: string, mappedSymbols) {
  const key = 'default' + (name.charAt(0).toUpperCase() + name.substr(1));
  return mappedSymbols[key] ? mappedSymbols[key].text : '';
}

function getType(name = '') {
  return ['color', 'width', 'font'].find(
    type => name.toLowerCase().indexOf(type) > -1,
  );
}

export function styleApi({ css }) {
  const root = safeParse(safeParse(css));
  const meta = new StylableProcessor(undefined, processNamespace).process(root);

  const params = [];
  let description = '';
  let defaultValue = '';

  (Object.values(meta.mappedSymbols).find(
    (mappedSymbol: any) => mappedSymbol.text === '--overridable',
  ) as any).node.parent.nodes.forEach(item => {
    // tslint:disable-next-line:switch-default
    switch (item.type) {
      case 'comment':
        description = item.text;
        const defaultValueIndex = description.search(defaultValueRegex);

        if (defaultValueIndex > -1) {
          defaultValue = defaultValueRegex.exec(description)[1];
          description = description.substring(0, defaultValueIndex).trim();
        }

        break;
      case 'decl':
        params.push({
          name: item.prop,
          description,
          defaultValue:
            defaultValue || findDefaultValue(item.prop, meta.mappedSymbols),
          type: getType(item.prop),
        });
        description = '';
        defaultValue = '';
    }
  });

  return <StyleApiTable items={params} />;
}
