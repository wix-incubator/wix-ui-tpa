import * as React from 'react';
import { Tags } from './';
import { ALIGNMENT } from './constants';
import { snap, story, visualize } from 'storybook-snapper';
import { TPAComponentsProvider } from '../TPAComponentsConfig';

const MANY_ITEMS_COUNT = 20;
const FEW_ITEMS_COUNT = 3;

function generateItems(amount) {
  return new Array(amount).map(i => ({
    title: `Title ${i}`,
    value: `value ${i}`,
    checked: i % 3 === 0,
  }));
}

function testSuite(alignment?) {
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
        <Tags
          items={generateItems(FEW_ITEMS_COUNT)}
          onClick={() => {}}
          alignment={alignment}
        />
      </div>
    ));

    snap('RTL', () => (
      <TPAComponentsProvider value={{ rtl: true }}>
        <Tags
          items={generateItems(FEW_ITEMS_COUNT)}
          onClick={() => {}}
          alignment={alignment}
        />
      </TPAComponentsProvider>
    ));
  });
}

visualize('Tags', () => {
  testSuite(undefined);

  Object.values(ALIGNMENT).forEach(testSuite);
});
