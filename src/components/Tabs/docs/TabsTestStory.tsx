import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '..';

const kind = 'Tests';
const items = [
  { title: 'Title 1' },
  { title: 'Title 2' },
  { title: 'Title 3' },
  { title: 'Title 4' },
  { title: 'Title 5' },
  { title: 'Title 6' },
  { title: 'Title 7' },
  { title: 'Title 8' },
  { title: 'Title 9' },
  { title: 'Title 10' },
];

function renderTest(props?: any) {
  const defaultProps = {
    items,
  };
  return (
    <div style={{ margin: '10px', maxWidth: 200 }}>
      <Tabs data-hook={'storybook-e2e-Tabs'} {...defaultProps} {...props} />
    </div>
  );
}

storiesOf(kind, module).add('Tabs', renderTest);
