import * as React from 'react';
import { st, classes, cssStates } from './Grid.st.css';
import { getGridStyle, getMediaQueries, itemsPerRowWidth } from './GridUtils';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';
import {
  COLUMN_GAP,
  DEFAULT_MIN_WIDTH,
  MOBILE_COLUMN_GAP,
  MOBILE_ROW_GAP,
  ROW_GAP,
} from './constants';
import { GridDataKeys, GridDataHooks } from './DataHooks';
import { Item } from './Item/Item';
import { TPAComponentProps } from '../../types';
import { generateKey } from '../../common/random';

export interface GridProps extends TPAComponentProps {
  children?: React.ReactNode[];
  showRowDivider: boolean;
  uniformRowHeight: boolean;
  maxColumns?: number;
  minColumnWidth?: number;
  maxColumnWidth?: number;
  width?: number;
  rowGap?: number;
  columnGap?: number;
  dividerWidth?: string | number;
}

interface DefaultProps {
  children: React.ReactNode[];
  showRowDivider: boolean;
  uniformRowHeight: boolean;
  maxColumns: number;
  width: number;
  minColumnWidth: number;
  dividerWidth: string;
}

export class Grid extends React.PureComponent<GridProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Grid';
  static Item = Item;

  static defaultProps: DefaultProps = {
    children: [],
    showRowDivider: false,
    maxColumns: 1,
    width: 0,
    dividerWidth: '1px',
    uniformRowHeight: true,
    minColumnWidth: DEFAULT_MIN_WIDTH,
  };

  private getContainerDataAttributes({
    itemsPerRow,
    itemMaxWidth,
    dividerWidth,
    rowGapInPixels,
    columnGapInPixels,
    maxColumnWidth,
    minColumnWidth,
  }) {
    return {
      [GridDataKeys.itemsPerRow]: itemsPerRow,
      [GridDataKeys.itemMaxWidth]: itemMaxWidth,
      [GridDataKeys.dividerWidth]: dividerWidth,
      [GridDataKeys.rowGap]: rowGapInPixels,
      [GridDataKeys.columnGap]: columnGapInPixels,
      [GridDataKeys.maxColumnWidth]: maxColumnWidth,
      [GridDataKeys.minColumnWidth]: minColumnWidth,
    };
  }

  render() {
    return (
      <TPAComponentsConsumer>
        {({ mobile }) => {
          const {
            showRowDivider,
            width,
            children,
            uniformRowHeight,
            minColumnWidth,
            maxColumns,
            className,
          } = this.props;
          const itemMinWidth = `${minColumnWidth}px`;
          const itemMaxWidth = this.props.maxColumnWidth
            ? `${this.props.maxColumnWidth}px`
            : '100vw';
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
          const rowGapInPixels = showRowDivider
            ? `calc(${rowGap}px + ${dividerWidth})`
            : `${rowGap}px`;
          const columnGapInPixels = `${columnGap}px`;
          const isFullWidth = width === 0;
          const itemsPerRow = isFullWidth
            ? maxColumns
            : itemsPerRowWidth(width, minColumnWidth, maxColumns, columnGap);
          const gridTemplateColumns = isFullWidth
            ? ''
            : `repeat(${itemsPerRow}, minmax(${itemMinWidth}, ${itemMaxWidth}))`;

          const gridId = generateKey();
          const cssStateDivider = Object.keys(cssStates({ dividers: true }))[0];
          return (
            <div
              className={st(
                classes.root,
                { dividers: showRowDivider, uniformRowHeight },
                className,
              )}
              id={gridId}
              data-hook={this.props['data-hook']}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: `${getGridStyle({
                    rowGap,
                    dividerWidth,
                    cssStateDivider,
                    gridId,
                    gridTemplateColumns,
                    listWrapperClass: classes.listWrapper,
                  })}
                  ${
                    isFullWidth
                      ? getMediaQueries({
                          maxColumns,
                          minColumnWidth,
                          maxColumnWidth: itemMaxWidth,
                          columnGap,
                          ListItemClass: classes.listWrapper,
                          gridId,
                        })
                      : ''
                  }`,
                }}
              />
              <ul
                className={classes.listWrapper}
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
                  maxColumnWidth: itemMaxWidth,
                  minColumnWidth: itemMinWidth,
                })}
                data-hook={GridDataHooks.container}
              >
                {children}
              </ul>
            </div>
          );
        }}
      </TPAComponentsConsumer>
    );
  }
}
