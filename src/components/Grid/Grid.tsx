import * as React from 'react';
import styles from './Grid.st.css';
import {
  generateListClassId,
  getMediaQueries,
  getMinWidthByCardType,
  itemsPerRowWidth,
} from './GridUtils';

export interface IGridItem {
  item: React.ReactNode;
  key?: string | number;
  colSpan?: number;
  rowSpan?: number;
}

export interface GridProps {
  withDivider: boolean;
  items: IGridItem[];
  maxColumns?: number;
  minColumnWidth?: number;
  maxColumnWidth?: number;
  width?: number;
  rowGap?: number;
  columnGap?: number;
  dividerWidth?: string | number;
}

interface DefaultProps {
  withDivider: boolean;
  items: IGridItem[];
  maxColumns: number;
  rowGap: number;
  columnGap: number;
  width: number;
  dividerWidth: string;
}

export class Grid extends React.Component<GridProps> {
  static displayName = 'Grid';
  static defaultProps: DefaultProps = {
    withDivider: false,
    items: [],
    maxColumns: 1,
    rowGap: 32,
    columnGap: 32,
    width: 0,
    dividerWidth: '1px',
  };

  render() {
    const {
      withDivider,
      width,
      maxColumnWidth,
      rowGap,
      columnGap,
      items,
      ...rest
    } = this.props;
    const dividerWidth =
      typeof this.props.dividerWidth === 'number'
        ? `${this.props.dividerWidth}px`
        : this.props.dividerWidth;
    const isFullWidth = width === 0;
    const maxColumns = Math.min(this.props.maxColumns, items.length);
    const minColumnWidth =
      this.props.minColumnWidth ||
      getMinWidthByCardType(items[0] && items[0].item);
    const itemsPerRow = isFullWidth
      ? maxColumns
      : itemsPerRowWidth(width, minColumnWidth, maxColumns, columnGap);
    const gridTemplateColumns = isFullWidth
      ? ''
      : `repeat(${itemsPerRow}, minmax(${minColumnWidth}px, ${
          maxColumnWidth ? `${maxColumnWidth}px` : '100vw'
        }))`;

    const gridId = generateListClassId();
    const cssStateDivider = Object.keys(
      styles.$cssStates({ dividers: true }),
    )[0];

    return (
      <div {...styles('root', { dividers: withDivider }, rest)} id={gridId}>
        <style
          dangerouslySetInnerHTML={{
            __html: `  
          #${gridId} .${styles.listWrapper} {
            -ms-grid-columns: ${gridTemplateColumns};
          }

          #${gridId}[${cssStateDivider}] {
            padding: calc((${rowGap}px / 2) + ${dividerWidth}) 0;
          }

          #${gridId}[${cssStateDivider}] li::before {
            top: calc((${rowGap}px / -2) - ${dividerWidth});
          }

          #${gridId}[${cssStateDivider}] li::after {
            bottom: calc((${rowGap}px / -2) - ${dividerWidth});
          }

          #${gridId}[${cssStateDivider}] li::before,
          #${gridId}[${cssStateDivider}] li::after,
          #${gridId}[${cssStateDivider}] .${styles.listWrapper}::before,
          #${gridId}[${cssStateDivider}] .${styles.listWrapper}::after {
            height: ${dividerWidth};
          }
          
          #${gridId}[${cssStateDivider}] li::after,
          #${gridId}[${cssStateDivider}] li::before {
           left: -${rowGap}px;
}
        `,
          }}
        />
        {isFullWidth
          ? getMediaQueries({
              maxColumns,
              minColumnWidth,
              maxColumnWidth,
              columnGap,
              ListItemClass: styles.listWrapper,
              gridId,
            })
          : null}
        <ul
          className={styles.listWrapper}
          style={{
            gridTemplateColumns,
            gap: `calc(${rowGap}px + ${dividerWidth}) ${columnGap}px`,
          }}
        >
          {items.map(({ item, key, colSpan, rowSpan }, index) => {
            return (
              <li
                style={{
                  gridColumnEnd: `span ${colSpan || 1}`,
                  gridRowEnd: `span ${rowSpan || 1}`,
                }}
                className={styles.cardContainer}
                key={key ? key : `card-container-${index}`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
