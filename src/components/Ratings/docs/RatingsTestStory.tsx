import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Ratings } from '..';

const kind = 'Tests';

function renderTest(props?: any) {
  const defaultProps = {
    value: 3,
  };
  return (
    <div style={{ margin: '10px', maxWidth: 200 }}>
      <Ratings data-hook={'storybook-e2e-Ratings'} {...props} />
      <Ratings
        data-hook={'storybook-e2e-Ratings-withValue'}
        {...defaultProps}
        {...props}
      />
    </div>
  );
}

storiesOf(kind, module).add('Ratings', renderTest);
