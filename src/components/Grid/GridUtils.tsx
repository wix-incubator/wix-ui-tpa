import * as React from 'react';

export function itemsPerRowWidth(rowWidth, itemWidth, maxColumns, columnGap) {
  if (rowWidth !== 0) {
    while (rowWidth < maxColumns * itemWidth + columnGap * (maxColumns - 1)) {
      maxColumns--;
    }
  }

  return maxColumns || 1;
}

export function getMediaQueries({
  maxColumns,
  minColumnWidth,
  maxColumnWidth,
  columnGap,
  ListItemClass,
  gridId,
}) {
  let mediaQueries = '';
  while (maxColumns > 0) {
    const minWidth = maxColumns * minColumnWidth + columnGap * (maxColumns - 1);
    mediaQueries = `
@media (min-width: ${minWidth}px) {
  #${gridId} .${ListItemClass} {
    -ms-grid-columns: repeat(${maxColumns}, minmax(${minColumnWidth}px, ${maxColumnWidth}));
    grid-template-columns: repeat(${maxColumns}, minmax(${minColumnWidth}px, ${maxColumnWidth}));
  }
}
${mediaQueries}`;
    maxColumns--;
  }
  return mediaQueries;
}

export function getGridStyle({
  gridId,
  gridTemplateColumns,
  cssStateDivider,
  rowGap,
  dividerWidth,
  listWrapperClass,
}) {
  return `  
#${gridId} .${listWrapperClass} {
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
#${gridId}[${cssStateDivider}] .${listWrapperClass}::before,
#${gridId}[${cssStateDivider}] .${listWrapperClass}::after {
  height: ${dividerWidth};
}

#${gridId}[${cssStateDivider}] li::after,
#${gridId}[${cssStateDivider}] li::before {
  left: -${rowGap}px;
}`;
}
