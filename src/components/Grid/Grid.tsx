import * as React from 'react';
import styles from './Grid.st.css';
import {
  generateListClassId,
  getGridStyle,
  getMediaQueries,
  getMinWidthByCardType,
  itemsPerRowWidth,
} from './GridUtils';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';

export const ROW_GAP = 32;
export const COLUMN_GAP = 32;
export const MOBILE_ROW_GAP = 20;
export const MOBILE_COLUMN_GAP = 20;
export const COLUMN_SPAN = 1;
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
            typeof this.props.rowGap === 'number'
              ? this.props.rowGap
              : mobile
              ? MOBILE_ROW_GAP
              : ROW_GAP;
          const columnGap =
            typeof this.props.columnGap === 'number'
              ? this.props.columnGap
              : mobile
              ? MOBILE_COLUMN_GAP
              : COLUMN_GAP;
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
            : `repeat(${itemsPerRow}, minmax(${minColumnWidth}px, 100%))`;

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
                  __html: `${getGridStyle({
                    rowGap,
                    dividerWidth,
                    cssStateDivider,
                    gridId,
                    gridTemplateColumns,
                    listWrapperClass: styles.listWrapper,
                  })}
                  ${
                    isFullWidth
                      ? getMediaQueries({
                          maxColumns,
                          minColumnWidth,
                          columnGap,
                          ListItemClass: styles.listWrapper,
                          gridId,
                        })
                      : ''
                  }`,
                }}
              />
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
                    { item, key, colSpan = COLUMN_SPAN, rowSpan = ROW_SPAN },
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
