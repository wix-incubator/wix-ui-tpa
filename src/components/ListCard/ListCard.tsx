import * as React from 'react';
import styles from './ListCard.st.css';
import {
  generateListClassId,
  getMediaQueries,
  getMinWidthByCardType,
  itemsPerRowWidth,
} from './ListCardUtils';

export interface IListCardItem {
  item: React.ReactNode;
  key?: string | number;
}

export interface ListCardProps {
  withDivider: boolean;
  items: IListCardItem[];
  maxItemsPerRow?: number;
  minItemWidth?: number;
  maxItemWidth?: number;
  listWidth?: number;
  rowGap?: number;
  columnGap?: number;
  dividerWidth?: string;
}

interface DefaultProps {
  withDivider: boolean;
  items: IListCardItem[];
  maxItemsPerRow: number;
  rowGap: number;
  columnGap: number;
  listWidth: number;
  dividerWidth: string;
}

export class ListCard extends React.Component<ListCardProps> {
  static displayName = 'ListCard';
  static defaultProps: DefaultProps = {
    withDivider: false,
    items: [],
    maxItemsPerRow: 1,
    rowGap: 32,
    columnGap: 32,
    listWidth: 0,
    dividerWidth: '1px',
  };

  render() {
    const {
      withDivider,
      listWidth,
      maxItemWidth,
      rowGap,
      columnGap,
      items,
      dividerWidth,
      ...rest
    } = this.props;
    const isFullWidth = listWidth === 0;
    const maxItemsPerRow = Math.min(this.props.maxItemsPerRow, items.length);
    const minItemWidth =
      this.props.minItemWidth ||
      getMinWidthByCardType(items[0] && items[0].item);
    const itemsPerRow = isFullWidth
      ? maxItemsPerRow
      : itemsPerRowWidth(listWidth, minItemWidth, maxItemsPerRow, columnGap);
    const gridTemplateColumns = isFullWidth
      ? ''
      : `repeat(${itemsPerRow}, minmax(${minItemWidth}px, ${
          maxItemWidth ? `${maxItemWidth}px` : '100vw'
        }))`;

    const listCardId = generateListClassId();

    const dividerCorrectness = `#${listCardId}.${styles.root}[${Object.keys(styles.$cssStates({ dividers: true }))[0]}] li:nth-child(${itemsPerRow}n+1)::before,
     #${listCardId}.${styles.root}[${Object.keys(styles.$cssStates({ dividers: true }))[0]}] li:nth-child(${itemsPerRow}n+1)::after {left: 0}`;

    styles.$css += dividerCorrectness;
    return (
      <div>
        {withDivider ? <style type="text/css" >{dividerCorrectness}</style> : ''}
        {/*<style type="text/css">`*/}
        {/*  .${styles.root}:dividers \{*/}
        {/*    padding: wixApply(calculate, wixApply(string, /), wixApply(calculate, wixApply(string, +), value(dividerWidth), 32px), 2) 0;*/}
        {/*    position: relative;*/}
        {/*  \}*/}
        {/*`</style>*/}
        <div {...styles('root', { dividers: withDivider }, rest)} id={listCardId}>
          {listWidth === 0
            ? getMediaQueries({
              maxItemsPerRow,
              minItemWidth,
              maxItemWidth,
              columnGap,
              ListItemClass: styles.listWrapper,
              listCardId,
            })
            : null}
          <ul
            className={styles.listWrapper}
            style={{
              gridTemplateColumns,
              gap: `${rowGap}px ${columnGap}px`,
            }}
          >
            {items.map(({ item, key }, index) => {
              return (
                <li
                  className={styles.cardContainer}
                  key={key ? key : `card-container-${index}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
