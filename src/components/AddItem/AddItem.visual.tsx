import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { AddItem, ALIGNMENT, ICON_SIZE, DIRECTION } from './';

const CONTAINER_SIZES_MAP = {
  [ICON_SIZE.small]: { width: '250px', height: '65px' },
  [ICON_SIZE.medium]: { width: '250px', height: '70px' },
  [ICON_SIZE.large]: { width: '250px', height: '100px' },
  [ICON_SIZE.xLarge]: { width: '250px', height: '130px' },
};

visualize('AddItem', () => {
  story('simple', () => {
    snap('With regular text', <AddItem>Add Item</AddItem>);
    snap(
      'With child node',
      <AddItem>
        <div>Add Item div</div>
      </AddItem>,
    );
  });

  story('Sizes', () => {
    Object.values(ICON_SIZE).map((size) => {
      Object.values(DIRECTION).map((direction) => {
        snap(
          `${size} / ${direction}`,
          <div
            style={{
              width: CONTAINER_SIZES_MAP[size].width,
              height: CONTAINER_SIZES_MAP[size].height,
            }}
          >
            <AddItem iconSize={size} direction={direction}>
              Add Item
            </AddItem>
          </div>,
        );
      });
    });
  });

  story('Alignments', () => {
    Object.values(ALIGNMENT).map((alignment) => {
      snap(alignment, <AddItem alignment={alignment}>Add Item</AddItem>);
    });
  });

  story('only icons', () => {
    Object.values(ICON_SIZE).map((size) => {
      snap(
        size,
        <div
          style={{
            width: CONTAINER_SIZES_MAP[size].width,
            height: CONTAINER_SIZES_MAP[size].height,
          }}
        >
          <AddItem iconSize={size} />
        </div>,
      );
    });
  });

  story('states', () => {
    snap('disabled', <AddItem disabled>Add Item</AddItem>);
    snap('hasError', <AddItem hasError>Add Item</AddItem>);
  });
});
