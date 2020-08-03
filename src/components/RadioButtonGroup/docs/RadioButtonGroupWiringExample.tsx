import * as React from 'react';
import { RadioButtonGroup } from '../';
import { RadioButton } from '../../RadioButton';

export const RadioButtonGroupWiringExample = () => {
  return (
    <RadioButtonGroup defaultValue={'meowmeow'}>
      <RadioButton label={'meow'} value={'meow'} />
      <RadioButton label={'meow1'} value={'meowmeow'} />
    </RadioButtonGroup>
  );
};
