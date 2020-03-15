import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tags } from '..';

const kind = 'Tests';
const items = new Array(10).fill(null).map((item, i) => ({
  title: `Title ${i}`,
  value: `value ${i}`,
  checked: i % 2 === 0,
}));

function renderTest(props?: any) {
  const defaultProps = {
    items,
    onClick: () => {},
  };
  return (
    <div style={{ margin: '10px', maxWidth: 200 }}>
      <Tags data-hook={'storybook-e2e-Tags'} {...defaultProps} {...props} />
    </div>
  );
}

storiesOf(kind, module).add('Tags', renderTest);
