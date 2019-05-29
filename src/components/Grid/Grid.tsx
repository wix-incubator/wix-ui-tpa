import * as React from 'react';
import styles from './Grid.st.css';
import {
  generateListClassId,
  getMediaQueries,
  getMinWidthByCardType,
  itemsPerRowWidth,
} from './GridUtils';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';
import style from '../Button/Button.st.css';

export const ROW_GAP = 32;
export const COLUMN_GAP = 32;
export const MOBILE_ROW_GAP = 20;
export const MOBILE_COLUMN_GAP = 20;
export const COLUMS_SPAN = 1;
export const ROW_SPAN = 1;

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
  width?: number;
  rowGap?: number;
  columnGap?: number;
  dividerWidth?: string | number;
}

interface DefaultProps {
  withDivider: boolean;
  items: IGridItem[];
  maxColumns: number;
  width: number;
  dividerWidth: string;
}

export class Grid extends React.Component<GridProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Grid';
  static defaultProps: DefaultProps = {
    withDivider: false,
    items: [],
    maxColumns: 1,
    width: 0,
    dividerWidth: '1px',
  };

  render() {
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => {
          const { withDivider, width, items, ...rest } = this.props;
          const rowGap =
            this.props.rowGap || (mobile ? MOBILE_ROW_GAP : ROW_GAP);
          const columnGap =
            this.props.columnGap || (mobile ? MOBILE_COLUMN_GAP : COLUMN_GAP);
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
            : `repeat(${itemsPerRow}, minmax(${minColumnWidth}px, 100vw))`;

          const gridId = generateListClassId();
          const cssStateDivider = Object.keys(
            styles.$cssStates({ dividers: true }),
          )[0];
          return (
            <div
              {...styles('root', { dividers: withDivider }, rest)}
              id={gridId}
            >
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
          }`,
                }}
              />
              {isFullWidth
                ? getMediaQueries({
                    maxColumns,
                    minColumnWidth,
                    columnGap,
                    ListItemClass: styles.listWrapper,
                    gridId,
                  })
                : null}
              <ul
                className={styles.listWrapper}
                style={{
                  gridTemplateColumns,
                  gap: withDivider
                    ? `calc(${rowGap}px + ${dividerWidth}) ${columnGap}px`
                    : `${rowGap}px ${columnGap}px`,
                }}
              >
                {items.map(
                  (
                    { item, key, colSpan = COLUMS_SPAN, rowSpan = ROW_SPAN },
                    index,
                  ) => {
                    return (
                      <li
                        style={{
                          gridColumnEnd: `span ${colSpan}`,
                          gridRowEnd: `span ${rowSpan}`,
                        }}
                        className={styles.cardContainer}
                        key={key ? key : `card-container-${index}`}
                      >
                        {item}
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
