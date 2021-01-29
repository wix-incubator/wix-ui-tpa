import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TPAComponentsWrapper } from '../../../test/utils';
import { RadioButton, RadioButtonTheme } from '..';
import { StoryCategory } from '../../../../stories/storyHierarchy';

function RadioButtonTest(props?: any) {
  const [selected, setSelected] = React.useState(0);

  return (
    <div style={{ margin: '10px', maxWidth: 200 }}>
      <div tabIndex={0} id="initial-focus">
        Element to Focus on
      </div>
      <div>
        <RadioButton
          withFocusRing
          value={'Checked'}
          checked={selected === 0}
          onChange={() => setSelected(0)}
          theme={RadioButtonTheme.Box}
          label="box theme"
          data-hook="radio-button-box"
        />
      </div>
      <div style={{ marginTop: '50px' }}>
        <RadioButton
          withFocusRing
          value={'Checked'}
          checked={selected === 1}
          onChange={() => setSelected(1)}
          theme={RadioButtonTheme.Default}
          label="default theme"
          data-hook="radio-button-default"
        />
      </div>
      <div style={{ marginTop: '50px' }}>
        {TPAComponentsWrapper({ mobile: true })(
          <RadioButton
            withFocusRing
            value={'Checked'}
            checked={selected === 2}
            onChange={() => setSelected(2)}
            theme={RadioButtonTheme.Default}
            label="no focus-ring on mobile"
            data-hook="radio-button-default-mobile"
          />,
        )}
      </div>
    </div>
  );
}

storiesOf(StoryCategory.TESTS, module).add('RadioButton', RadioButtonTest);
