import * as React from 'react';
import { RadioButtonGroup } from '../';
import { RadioButton } from '../../RadioButton';
import { RadioButtonTheme } from '../../RadioButton/RadioButton';
import { RadioButtonGroupLayout } from '../RadioButtonGroup';
import { classes } from './RadioButtonGroupWiringExample.st.css';

export const RadioButtonGroupWiringExample = () => {
  return (
    <div className={classes.root}>
      Horizontal Layout
      <div className={classes.component}>
        <RadioButtonGroup
          layout={RadioButtonGroupLayout.Horizontal}
          name="areAreRadio"
          defaultValue={'optionoption'}
        >
          <RadioButton label={'option'} value={'option'} />
          <RadioButton label={'option1'} value={'optionoption'} />
          <RadioButton label={'option3'} value={'optionoptionoption'} />
        </RadioButtonGroup>
      </div>
      Disabled
      <div className={classes.component}>
        <RadioButtonGroup
          layout={RadioButtonGroupLayout.Horizontal}
          name="areAreRadio"
          disabled
        >
          <RadioButton label={'option'} value={'option'} />
          <RadioButton label={'option1'} value={'optionoption'} />
          <RadioButton label={'option3'} value={'optionoptionoption'} />
        </RadioButtonGroup>
      </div>
      Error
      <div className={classes.component}>
        <RadioButtonGroup
          error
          withSpacing
          errorText={'Bad choice'}
          name="areAreRadio"
        >
          <RadioButton label={'option'} value={'option'} />
          <RadioButton label={'option1'} value={'optionoption'} />
          <RadioButton label={'option3'} value={'optionoptionoption'} />
        </RadioButtonGroup>
      </div>
      Box
      <div className={classes.component}>
        <RadioButtonGroup
          withSpacing
          theme={RadioButtonTheme.Box}
          name="areAreRadio"
          defaultValue={'optionoption'}
        >
          <RadioButton suffix="$10" label={'option'} value={'option'} />
          <RadioButton label={'option1'} value={'optionoption'} />
          <RadioButton label={'option3'} value={'optionoptionoption'} />
        </RadioButtonGroup>
      </div>
    </div>
  );
};
