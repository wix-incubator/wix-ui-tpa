import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { ActionsMenuLayout, Alignment } from './';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';

function generateItems(props = {}) {
  const { subtitle, prefixIcon } = props as any;
  const list = [];
  let itemCount = 0;

  ['Item', 'Item', 'Divider', 'Item'].forEach((type, i) => {
    const Component = ActionsMenuLayout[type];
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
      <ActionsMenuLayout alignment={alignment}>
        {generateItems()}
      </ActionsMenuLayout>
    ));

    snap('with subtitle', () => (
      <ActionsMenuLayout alignment={alignment}>
        {generateItems({ subtitle: true })}
      </ActionsMenuLayout>
    ));

    snap('with icon', () => (
      <ActionsMenuLayout alignment={alignment}>
        {generateItems({ prefixIcon: true })}
      </ActionsMenuLayout>
    ));

    snap('with subtitle & icon', () => (
      <ActionsMenuLayout alignment={alignment}>
        {generateItems({ subtitle: true, prefixIcon: true })}
      </ActionsMenuLayout>
    ));

    snap('rtl', () => (
      <div dir={'rtl'}>
        <ActionsMenuLayout alignment={alignment}>
          {generateItems({ subtitle: true, prefixIcon: true })}
        </ActionsMenuLayout>
      </div>
    ));

    snap('rtl', () => (
      <div dir={'rtl'}>
        <ActionsMenuLayout alignment={alignment}>
          {generateItems({ subtitle: true, prefixIcon: true })}
        </ActionsMenuLayout>
      </div>
    ));

    snap('mobile', () => (
      <TPAComponentsProvider value={{ mobile: true }}>
        <ActionsMenuLayout alignment={alignment}>
          {generateItems({ subtitle: true, prefixIcon: true })}
        </ActionsMenuLayout>
      </TPAComponentsProvider>
    ));

    snap('RTL', () => (
      <TPAComponentsProvider value={{ rtl: true }}>
        <ActionsMenuLayout alignment={alignment}>
          {generateItems({ subtitle: true, prefixIcon: true })}
        </ActionsMenuLayout>
      </TPAComponentsProvider>
    ));

    snap('should have focus on second item', () => (
      <ActionsMenuLayout alignment={alignment} focusedIndex={1}>
        {generateItems()}
      </ActionsMenuLayout>
    ));
  });
}

visualize('ActionsMenuLayout', () => {
  testSuite(undefined);

  Object.values(Alignment).forEach(testSuite);
});
