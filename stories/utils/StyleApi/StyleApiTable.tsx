import * as React from 'react';
import styles from './StyleApiTable.st.css';

export interface StyleApiTableItem {
  name: string;
  description: string;
  defaultValue: string;
  type: string;
}

export interface StyleApiTableProps {
  items: StyleApiTableItem[];
}

export const StyleApiTable: React.FunctionComponent<StyleApiTableProps> = ({
  items,
}) => {
  return (
    <div {...styles('root', {}, { className: 'markdown-body' })}>
      <table data-hook="autodocs-props-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default Value</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.name}>
              <td data-hook="autodocs-prop-row-name">{item.name || '-'}</td>

              <td>{item.type}</td>
              <td>{item.description}</td>
              <td>
                {item.defaultValue && (
                  <pre className={styles.pre}>{item.defaultValue}</pre>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
