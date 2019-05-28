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
  colSpan?: number;
  rowSpan?: number;
}

export interface CardListProps {
  withDivider: boolean;
  items: ICardListItem[];
  maxColumns?: number;
  minColumnWidth?: number;
  maxColumnWidth?: number;
  listWidth?: number;
  rowGap?: number;
  columnGap?: number;
  dividerWidth?: string | number;
}

interface DefaultProps {
  withDivider: boolean;
  items: ICardListItem[];
  maxColumns: number;
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
    maxColumns: 1,
    rowGap: 32,
    columnGap: 32,
    listWidth: 0,
    dividerWidth: '1px',
  };

  render() {
    const {
      withDivider,
      listWidth,
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
    const isFullWidth = listWidth === 0;
    const maxColumns = Math.min(this.props.maxColumns, items.length);
    const minColumnWidth =
      this.props.minColumnWidth ||
      getMinWidthByCardType(items[0] && items[0].item);
    const itemsPerRow = isFullWidth
      ? maxColumns
      : itemsPerRowWidth(listWidth, minColumnWidth, maxColumns, columnGap);
    const gridTemplateColumns = isFullWidth
      ? ''
      : `repeat(${itemsPerRow}, minmax(${minColumnWidth}px, ${
          maxColumnWidth ? `${maxColumnWidth}px` : '100vw'
        }))`;

    const cardListId = generateListClassId();
    const cssStateDivider = Object.keys(
      styles.$cssStates({ dividers: true }),
    )[0];

    return (
      <div {...styles('root', { dividers: withDivider }, rest)} id={cardListId}>
        <style
          dangerouslySetInnerHTML={{
            __html: `  
          #${cardListId} .${styles.listWrapper} {
            -ms-grid-columns: ${gridTemplateColumns};
          }

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
          
          #${cardListId}[${cssStateDivider}] li::after,
          #${cardListId}[${cssStateDivider}] li::before {
           left: -${columnGap}px;
}
        `,
          }}
        />
        {listWidth === 0
          ? getMediaQueries({
              maxColumns,
              minColumnWidth,
              maxColumnWidth,
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
