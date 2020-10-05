import * as React from 'react';
import {snap, story, visualize} from 'storybook-snapper';
import {AddItem, ALIGNMENT, SIZE} from './';

const CONTAINER_SIZES_MAP = {
  [SIZE.tiny]: { width: '250px', height: '55px' },
  [SIZE.small]: { width: '250px', height: '70px' },
  [SIZE.medium]: { width: '250px', height: '100px' },
  [SIZE.large]: { width: '250px', height: '130px' },
}

visualize('AddItem', () => {
  story('simple', () => {
    snap('default props', <AddItem />);
    snap('With regular text', <AddItem>Add Item</AddItem>);
    snap('With child node', <AddItem><div></div></AddItem>);
    snap('Long text with Ellipsis', (
        <div style={{ height: '130px', width: '150px', marginBottom: '12px' }}>
          <AddItem size={SIZE.large}>Add Item long text!!!!</AddItem>
        </div>
    ));
  });

  story('Sizes', () => {
    Object.values(SIZE).map(size => {
      snap(size, (
          <div style={{ width: CONTAINER_SIZES_MAP[size].width, height: CONTAINER_SIZES_MAP[size].height }}>
            <AddItem size={size} >Add Item</AddItem>
          </div>
      ));
    });
  });

  story('Alignments', () => {
    Object.values(ALIGNMENT).map(alignment => {
      snap(alignment, <AddItem alignment={alignment} >Add Item</AddItem>);
    });
  });

  story('states', () => {
    snap('default', <AddItem >Add Item</AddItem>)
    snap('disabled', <AddItem disabled >Add Item</AddItem>);
    snap('hasError', <AddItem hasError >Add Item</AddItem>);
  });

});
