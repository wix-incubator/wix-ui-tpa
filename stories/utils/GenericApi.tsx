import * as React from 'react';
import { classes } from './GenericApi.st.css';

// TODO: this component should be defined in wix-storybook-utils
// This is because it is responsible for design of API table
// Storybook utils should be responsible for consistent styling

export interface IGenericApiItem {
  [columnId: string]: string;
}

export interface IGenericApiConfig {
  title: string;
  columns: {
    [columnId: string]: string;
  };
  items: IGenericApiItem[];
}

export function genericApiTable({ title, columns, items }: IGenericApiConfig) {
  return (
    <div className="markdown-body">
      <div>
        {title && (
          <div key="title" className={classes.tableTitle}>
            {title}
          </div>
        )}
        <table key="table" data-hook="autodocs-props-table">
          <thead key="head">
            <tr>
              {Object.entries(columns).map(([columnId, name]) => (
                <th key={`title_${columnId}`}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody key="body">
            {items.map((item, row) => (
              <tr key={`row_${row}`}>
                {Object.keys(columns).map((columnId) => (
                  <td key={`value_${columnId}_${row}`}>{item[columnId]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
