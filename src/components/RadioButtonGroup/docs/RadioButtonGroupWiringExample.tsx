import * as React from 'react';
import {RadioButtonGroup} from '../';
import {RadioButton} from '../../RadioButton';
import {CheckboxGroupLayout} from "../../CheckboxGroup";
import {CheckboxTheme} from "../../RadioButton/RadioButton";

export const RadioButtonGroupWiringExample = () => {
  return (<div style={{display:'flex'}}>
    <RadioButtonGroup layout={CheckboxGroupLayout.Horizontal} name='areAreRadio' defaultValue={'meowmeow'}>
      <RadioButton label={'meow'} value={'meow'} />
      <RadioButton label={'meow1'} value={'meowmeow'} />
      <RadioButton label={'meow3'}   value={'meowmeowmeow'} />
    </RadioButtonGroup>
              <RadioButtonGroup layout={CheckboxGroupLayout.Vertical} name='areAreRadio'  disabled defaultValue={'meowmeow'}>
      <RadioButton label={'meow'} value={'meow'} />
      <RadioButton label={'meow1'} value={'meowmeow'} />
      <RadioButton label={'meow3'}   value={'meowmeowmeow'} />
    </RadioButtonGroup>
          <RadioButtonGroup theme={CheckboxTheme.Box} layout={CheckboxGroupLayout.Vertical} name='areAreRadio'   defaultValue={'meowmeow'}>
      <RadioButton label={'meow'} value={'meow'} />
      <RadioButton label={'meow1'} value={'meowmeow'} />
      <RadioButton label={'meow3'}   value={'meowmeowmeow'} />
    </RadioButtonGroup>

      </div>
  );
};
