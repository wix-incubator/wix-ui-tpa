import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TPAComponentsWrapper } from '../../../test/utils';
import { RadioButton, RadioButtonTheme } from '..';

const kind = 'Tests';

function renderTest(props?: any) {
  return (
    <div style={{ margin: '10px', maxWidth: 200 }}>
      <div>
        <RadioButton
          value={'Checked'}
          checked
          withFocusRing
          onChange={(val) => console.log(val)}
          theme={RadioButtonTheme.Box}
          label="box theme"
          data-hook="radio-button-box"
        />
      </div>
      <div style={{ marginTop: '50px' }}>
        <RadioButton
          value={'Checked'}
          checked
          withFocusRing
          onChange={(val) => console.log(val)}
          theme={RadioButtonTheme.Default}
          label="default theme"
          data-hook="radio-button-default"
        />
      </div>
      <div style={{ marginTop: '50px' }}>
        {TPAComponentsWrapper({ mobile: true })(
          <RadioButton
            value={'Checked'}
            checked
            withFocusRing
            onChange={(val) => console.log(val)}
            theme={RadioButtonTheme.Default}
            label="no focus-ring on mobile"
            data-hook="radio-button-default-mobile"
          />,
        )}
      </div>
    </div>
  );
}

storiesOf(kind, module).add('RadioButton', renderTest);
