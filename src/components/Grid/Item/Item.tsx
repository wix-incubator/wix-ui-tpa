import * as React from 'react';
import { GridDataHooks, GridDataKeys } from '../DataHooks';
import { classes } from '../Grid.st.css';
import { DEFAULT_COLUMN_SPAN, DEFAULT_ROW_SPAN } from '../constants';

export interface ItemProps {
  colSpan?: number;
  rowSpan?: number;
}

interface DefaultProps {
  colSpan: number;
  rowSpan: number;
}

export class Item extends React.PureComponent<ItemProps> {
  static displayName = 'Item';
  static defaultProps: DefaultProps = {
    colSpan: DEFAULT_COLUMN_SPAN,
    rowSpan: DEFAULT_ROW_SPAN,
  };

  private getItemDataAttributes({ rowSpan, colSpan }) {
    return {
      [GridDataKeys.rowSpan]: rowSpan,
      [GridDataKeys.columnSpan]: colSpan,
    };
  }

  render() {
    const { children, rowSpan, colSpan } = this.props;
    return (
      <li
        data-hook={GridDataHooks.item}
        className={classes.item}
        style={{
          gridColumnEnd: `span ${colSpan}`,
          gridRowEnd: `span ${rowSpan}`,
        }}
        {...this.getItemDataAttributes({
          rowSpan,
          colSpan,
        })}
      >
        {children}
      </li>
    );
  }
}
