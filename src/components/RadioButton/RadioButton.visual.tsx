import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { RadioButton } from './';
import { RadioButtonProps } from './RadioButton';
import { Omit } from '../../types';

const VisualRadioButton = (
  props: Omit<RadioButtonProps, 'label' | 'onChange' | 'value'>,
) => <RadioButton label="label" value="value" onChange={() => {}} {...props} />;

visualize('ShareButton', () => {
  story('render', () => {
    snap('checked', <VisualRadioButton checked />);
    snap('disabled', <VisualRadioButton disabled />);
    snap('default', <VisualRadioButton />);
  });
});
