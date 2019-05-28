import * as React from 'react';
import styles from './CardList.st.css';
import {
  generateListClassId,
  getMediaQueries,
  getMinWidthByCardType,
  itemsPerRowWidth,
} from './CardListUtils';

export interface ICardListItem {
  item: React.ReactNode;
  key?: string | number;
}

export interface CardListProps {
  withDivider: boolean;
  items: ICardListItem[];
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
  items: ICardListItem[];
  maxItemsPerRow: number;
  rowGap: number;
  columnGap: number;
  listWidth: number;
  dividerWidth: string;
}

export class CardList extends React.Component<CardListProps> {
  static displayName = 'CardList';
  static defaultProps: DefaultProps = {
    withDivider: false,
    items: [],
    maxItemsPerRow: 1,
    rowGap: 32,
    columnGap: 32,
    listWidth: 0,
    dividerWidth: '8px',
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

    const cardListId = generateListClassId();
    const cssStateDivider = Object.keys(styles.$cssStates({ dividers: true }))[0];

    const dividerCorrectness = `
      #${cardListId}.${styles.root}[${cssStateDivider}] li:nth-child(${itemsPerRow}n+1)::before,
      #${cardListId}.${styles.root}[${cssStateDivider}] li:nth-child(${itemsPerRow}n+1)::after {left: 0}`;

    styles.$css += dividerCorrectness;
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: `
          #${cardListId}[${cssStateDivider}] {
            padding: calc((${columnGap}px / 2) + ${dividerWidth}) 0;
          }
          
          #${cardListId}[${cssStateDivider}] li::before {
            top: calc((${columnGap}px / -2) - ${dividerWidth});
          }
          
          #${cardListId}[${cssStateDivider}] li::after {
            bottom: calc((${columnGap}px / -2) - ${dividerWidth});
          }

          #${cardListId}[${cssStateDivider}] li::before,
          #${cardListId}[${cssStateDivider}] li::after,
          #${cardListId}[${cssStateDivider}] .${styles.listWrapper}::before,
          #${cardListId}[${cssStateDivider}] .${styles.listWrapper}::after {
            height: ${dividerWidth};
          }
          ${withDivider ? dividerCorrectness : ''}
        `}}/>
        <div {...styles('root', { dividers: withDivider }, rest)} id={cardListId}>
          {listWidth === 0
            ? getMediaQueries({
              maxItemsPerRow,
              minItemWidth,
              maxItemWidth,
              columnGap,
              ListItemClass: styles.listWrapper,
              cardListId,
            })
            : null}
          <ul
            className={styles.listWrapper}
            style={{
              gridTemplateColumns,
              gap: `calc(${rowGap}px + ${dividerWidth}) ${columnGap}px`,
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
