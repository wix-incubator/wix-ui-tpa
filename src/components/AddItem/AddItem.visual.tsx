import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { AddItem, ALIGNMENT, ICON_SIZE, DIRECTION } from './';

const CONTAINER_SIZES_MAP = {
  [ICON_SIZE.small]: { width: '250px', height: '55px' },
  [ICON_SIZE.medium]: { width: '250px', height: '70px' },
  [ICON_SIZE.large]: { width: '250px', height: '100px' },
  [ICON_SIZE.xLarge]: { width: '250px', height: '130px' },
};

visualize('AddItem', () => {
  story('simple', () => {
    snap('default props', <AddItem />);
    snap('With regular text', <AddItem>Add Item</AddItem>);
    snap(
      'With child node',
      <AddItem>
        <div>Add Item div</div>
      </AddItem>,
    );
    snap(
      'Long text with Ellipsis',
      <div style={{ height: '130px', width: '150px', marginBottom: '12px' }}>
        <AddItem iconSize={ICON_SIZE.xLarge}>Add Item long text!!!!</AddItem>
      </div>,
    );
  });

  story('Sizes', () => {
    Object.values(ICON_SIZE).map(size => {
      snap(
        size,
        <div
          style={{
            width: CONTAINER_SIZES_MAP[size].width,
            height: CONTAINER_SIZES_MAP[size].height,
          }}
        >
          <AddItem iconSize={size}>Add Item</AddItem>
        </div>,
      );
    });
  });

  story('Alignments', () => {
    Object.values(ALIGNMENT).map(alignment => {
      snap(alignment, <AddItem alignment={alignment}>Add Item</AddItem>);
    });
  });

  story('Directions', () => {
    Object.values(DIRECTION).map(direction => {
      snap(direction, <AddItem direction={direction}>Add Item</AddItem>);
    });
  });

  story('only icons', () => {
    Object.values(ICON_SIZE).map(size => {
      snap(
          size,
          <div
              style={{
                width: CONTAINER_SIZES_MAP[size].width,
                height: CONTAINER_SIZES_MAP[size].height,
              }}
          >
            <AddItem iconSize={size}/>
          </div>,
      );
    });
  });

  story('states', () => {
    snap('default', <AddItem>Add Item</AddItem>);
    snap('disabled', <AddItem disabled>Add Item</AddItem>);
    snap('hasError', <AddItem hasError>Add Item</AddItem>);
  });
});
