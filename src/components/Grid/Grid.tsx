import * as React from 'react';
import styles from './Grid.st.css';
import {
  generateListClassId,
  getGridStyle,
  getMediaQueries,
  itemsPerRowWidth,
} from './GridUtils';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';
import { DEFAULT_MIN_WIDTH } from './constants';
import { GridDataKeys, GridDataHooks } from './DataHooks';

export const ROW_GAP = 32;
export const COLUMN_GAP = 32;
export const MOBILE_ROW_GAP = 20;
export const MOBILE_COLUMN_GAP = 20;
export const COLUMN_SPAN = 1;
export const ROW_SPAN = 1;

export interface GridItem {
  item: React.ReactNode;
  key?: string | number;
  colSpan?: number;
  rowSpan?: number;
}

export interface GridProps {
  withDivider: boolean;
  autoRowHeight: boolean;
  items: GridItem[];
  maxColumns?: number;
  minColumnWidth?: number;
  width?: number;
  rowGap?: number;
  columnGap?: number;
  dividerWidth?: string | number;
}

interface DefaultProps {
  withDivider: boolean;
  autoRowHeight: boolean;
  items: GridItem[];
  maxColumns: number;
  width: number;
  minColumnWidth: number;
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
    autoRowHeight: true,
    minColumnWidth: DEFAULT_MIN_WIDTH,
  };

  private getContainerDataAttributes({
    itemsPerRow,
    itemMaxWidth,
    dividerWidth,
    rowGapInPixels,
    columnGapInPixels,
  }) {
    return {
      [GridDataKeys.itemsPerRow]: itemsPerRow,
      [GridDataKeys.itemMaxWidth]: itemMaxWidth,
      [GridDataKeys.dividerWidth]: dividerWidth,
      [GridDataKeys.rowGap]: rowGapInPixels,
      [GridDataKeys.columnGap]: columnGapInPixels,
    };
  }

  private getItemDataAttributes({ rowSpan, columnSpan }) {
    return {
      [GridDataKeys.rowSpan]: rowSpan,
      [GridDataKeys.columnSpan]: columnSpan,
    };
  }

  render() {
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => {
          const {
            withDivider,
            width,
            items,
            autoRowHeight,
            minColumnWidth,
            ...rest
          } = this.props;
          const itemMaxWidth = '100%';
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
          const rowGapInPixels = withDivider
            ? `calc(${rowGap}px + ${dividerWidth})`
            : `${rowGap}px`;
          const columnGapInPixels = `${columnGap}px`;
          const isFullWidth = width === 0;
          const maxColumns = Math.min(this.props.maxColumns, items.length);
          const itemsPerRow = isFullWidth
            ? maxColumns
            : itemsPerRowWidth(width, minColumnWidth, maxColumns, columnGap);
          const gridTemplateColumns = isFullWidth
            ? ''
            : `repeat(${itemsPerRow}, minmax(${minColumnWidth}px, ${itemMaxWidth}))`;

          const gridId = generateListClassId();
          const cssStateDivider = Object.keys(
            styles.$cssStates({ dividers: true }),
          )[0];
          return (
            <div
              {...styles(
                'root',
                { dividers: withDivider, autoRowHeight },
                rest,
              )}
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
                  gap: `${rowGapInPixels} ${columnGapInPixels}`,
                }}
                {...this.getContainerDataAttributes({
                  itemMaxWidth,
                  itemsPerRow,
                  dividerWidth,
                  rowGapInPixels,
                  columnGapInPixels,
                })}
                data-hook={GridDataHooks.container}
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
                        data-hook={GridDataHooks.item}
                        {...this.getItemDataAttributes({
                          rowSpan,
                          columnSpan: colSpan,
                        })}
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
