import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { RadioButton, RadioButtonTheme } from '..';

const kind = 'Tests';

function renderTest(props?: any) {
  return (
    <>
    <RadioButton
          value={'Checked'}
          checked
          withFocusRing
          onChange={(val) => console.log(val)}
          theme={RadioButtonTheme.Box}
          label="box theme"
          data-hook="radio-button-box"
        />
        <RadioButton
          value={'Checked'}
          checked
          withFocusRing
          onChange={(val) => console.log(val)}
          theme={RadioButtonTheme.Default}
          label="default theme"
          data-hook="radio-button-default"
        />
    </>
  );
}

storiesOf(kind, module).add('RadioButton', renderTest);
