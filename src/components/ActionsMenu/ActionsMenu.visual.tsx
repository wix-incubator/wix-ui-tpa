import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { ActionsMenu, Alignment } from './';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';

function generateItems(props = {}) {
  const { subtitle, prefixIcon } = props as any;
  const list = [];
  let itemCount = 0;

  ['Item', 'Item', 'Divider', 'Item'].forEach((type, i) => {
    const Component = ActionsMenu[type];
    const count = type === 'Item' ? ++itemCount : undefined;

    list.push(
      <Component
        disabled={i === 1}
        content={`Item ${count}`}
        subtitle={subtitle ? `Subtitle ${count}` : undefined}
        prefixIcon={prefixIcon ? <Heart /> : undefined}
        onClick={() => {}}
      />,
    );
  });

  return list;
}

function testSuite(alignment) {
  story(`Align ${alignment ? alignment : 'default'}`, () => {
    snap('several item', () => (
      <ActionsMenu alignment={alignment}>{generateItems()}</ActionsMenu>
    ));

    snap('with subtitle', () => (
      <ActionsMenu alignment={alignment}>
        {generateItems({ subtitle: true })}
      </ActionsMenu>
    ));

    snap('with icon', () => (
      <ActionsMenu alignment={alignment}>
        {generateItems({ prefixIcon: true })}
      </ActionsMenu>
    ));

    snap('with subtitle & icon', () => (
      <ActionsMenu alignment={alignment}>
        {generateItems({ subtitle: true, prefixIcon: true })}
      </ActionsMenu>
    ));

    snap('rtl', () => (
      <div dir={'rtl'}>
        <ActionsMenu alignment={alignment}>
          {generateItems({ subtitle: true, prefixIcon: true })}
        </ActionsMenu>
      </div>
    ));

    snap('rtl', () => (
      <div dir={'rtl'}>
        <ActionsMenu alignment={alignment}>
          {generateItems({ subtitle: true, prefixIcon: true })}
        </ActionsMenu>
      </div>
    ));

    snap('mobile', () => (
      <TPAComponentsProvider value={{ mobile: true }}>
        <ActionsMenu alignment={alignment}>
          {generateItems({ subtitle: true, prefixIcon: true })}
        </ActionsMenu>
      </TPAComponentsProvider>
    ));
  });
}

visualize('ActionsMenu', () => {
  testSuite(undefined);

  Object.values(Alignment).forEach(testSuite);
});
