import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { RadioButton, RadioButtonTheme } from './';
import { RadioButtonProps } from './RadioButton';
import { Omit } from '../../types';

const VisualRadioButton = (
  props: Omit<RadioButtonProps, 'label' | 'onChange' | 'value'>,
) => <RadioButton label="label" value="value" onChange={() => {}} {...props} />;

visualize('RadioButton', () => {
  story('default', () => {
    Object.values(RadioButtonTheme).map(theme => {
      snap(`${theme} / default`, <VisualRadioButton theme={theme} />);
    });
  });

  story('checked', () => {
    Object.values(RadioButtonTheme).map(theme => {
      snap(`${theme} / checked`, <VisualRadioButton theme={theme} checked />);
    });
  });

  story('disabled', () => {
    Object.values(RadioButtonTheme).map(theme => {
      snap(`${theme} / disabled`, <VisualRadioButton theme={theme} disabled />);
      snap(
        `${theme} / disabled / checked`,
        <VisualRadioButton theme={theme} disabled checked />,
      );
    });
  });

  story('error', () => {
    snap(
      `${RadioButtonTheme.Default} / error`,
      <VisualRadioButton theme={RadioButtonTheme.Default} error />,
    );
  });
});
