import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '..';

const kind = 'Tests';

function renderTest(props?: any) {
  const defaultProps = {
    label: "I'm not groot but label!",
  };

  return (
    <div style={{ margin: '10px', maxWidth: 250 }}>
      <div>
        <Checkbox
          onChange={() => {}}
          data-hook={'storybook-e2e-Checkbox'}
          {...defaultProps}
        />
      </div>
      <div>
        <Checkbox
          onChange={() => {}}
          data-hook={'storybook-e2e-CheckboxError'}
          error
          {...defaultProps}
        />
      </div>
    </div>
  );
}

storiesOf(kind, module).add('Checkbox', renderTest);
