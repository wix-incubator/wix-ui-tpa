import * as React from 'react';
import { safeParse, StylableProcessor, processNamespace } from '@stylable/core';

const defaultValueRegex = /@default\(([^\)]+)\)/;

function createTable(props) {
  console.log('adler', 'StyleApi.tsx:7', props);
  return (
    <table data-hook="autodocs-props-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {props.map(prop => (
          <tr key={prop.name}>
            <td data-hook="autodocs-prop-row-name">{prop.name || '-'}</td>

            <td>{prop.type}</td>

            <td>
              {prop.defaultValue && prop.defaultValue.value && (
                <pre>{prop.defaultValue}</pre>
              )}
            </td>

            <td>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function styleApi({ css }) {
  const root = safeParse(safeParse(css));
  const meta = new StylableProcessor(undefined, processNamespace).process(root);

  const params = [];
  let comment = '';
  let defaultValue = '';

  (Object.values(meta.mappedSymbols).find(
    (mappedSymbol: any) => mappedSymbol.text === '--overridable',
  ) as any).node.parent.nodes.forEach(item => {
    // tslint:disable-next-line:switch-default
    switch (item.type) {
      case 'comment':
        comment = item.text;
        const defaultValueIndex = comment.search(defaultValueRegex);

        if (defaultValueIndex > -1) {
          defaultValue = defaultValueRegex.exec(comment)[1];
          comment = comment.substring(0, defaultValueIndex).trim();
        }
        break;
      case 'decl':
        params.push({ name: item.prop, comment, defaultValue });
        comment = '';
        defaultValue = '';
    }
  });

  return createTable(params);
}
