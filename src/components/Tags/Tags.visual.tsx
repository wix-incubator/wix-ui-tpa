import * as React from 'react';
import { Tags } from './';
import { ALIGNMENT, SIZE, SKIN } from './constants';
import { snap, story, visualize } from 'storybook-snapper';
import { TPAComponentsProvider } from '../TPAComponentsConfig';

const MANY_ITEMS_COUNT = 20;
const FEW_ITEMS_COUNT = 3;

function generateItems(amount) {
  return new Array(amount).fill(null).map((el, i) => ({
    title: `Title ${i}`,
    value: `value ${i}`,
    checked: i % 3 === 0,
  }));
}

function alignmentTestSuite(alignment?) {
  story(`Align ${alignment ? alignment : 'default'}`, () => {
    snap('many item', () => (
      <Tags
        items={generateItems(MANY_ITEMS_COUNT)}
        onClick={() => {}}
        alignment={alignment}
      />
    ));

    snap('several item', () => (
      <Tags
        items={generateItems(FEW_ITEMS_COUNT)}
        onClick={() => {}}
        alignment={alignment}
      />
    ));

    snap('rtl', () => (
      <div dir={'rtl'}>
        <TPAComponentsProvider value={{ rtl: true }}>
          <Tags
            items={generateItems(FEW_ITEMS_COUNT)}
            onClick={() => {}}
            alignment={alignment}
          />
        </TPAComponentsProvider>
      </div>
    ));
  });
}

function sizeTestSuite(size?) {
  story(`Size ${size ? size : 'default'}`, () => {
    snap('several item', () => (
      <Tags
        items={generateItems(FEW_ITEMS_COUNT)}
        onClick={() => {}}
        size={size}
      />
    ));
  });
}

function skinTestSuite(skin?) {
  story(`Skin ${skin ? skin : 'default'}`, () => {
    snap('several item', () => (
      <Tags
        items={generateItems(FEW_ITEMS_COUNT)}
        onClick={() => {}}
        skin={skin}
      />
    ));
  });
}

visualize('Tags', () => {
  alignmentTestSuite();
  Object.values(ALIGNMENT).forEach(alignmentTestSuite);

  skinTestSuite();
  Object.values(SIZE).forEach(sizeTestSuite);

  sizeTestSuite();
  Object.values(SKIN).forEach(skinTestSuite);
});
