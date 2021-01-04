import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { RadioButton, RadioButtonTheme } from './';
import { RadioButtonProps } from './RadioButton';

const VisualRadioButton = (props: Partial<RadioButtonProps>) => (
  <RadioButton
    label={props.label || 'label'}
    value="value"
    onChange={() => {}}
    {...props}
  />
);

visualize('RadioButton', () => {
  story('default', () => {
    Object.values(RadioButtonTheme).map((theme) => {
      snap(`${theme} / default`, <VisualRadioButton theme={theme} />);
    });
  });

  story('checked', () => {
    Object.values(RadioButtonTheme).map((theme) => {
      snap(`${theme} / checked`, <VisualRadioButton theme={theme} checked />);
    });
  });

  story('disabled', () => {
    Object.values(RadioButtonTheme).map((theme) => {
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

  story('with children prop', () => {
    snap(
      `${RadioButtonTheme.Default} / default`,
      <VisualRadioButton
        theme={RadioButtonTheme.Default}
        children={
          <>
            <div>Using children as the RadioButton label</div>
            <div>Can add a subtitle as well</div>
          </>
        }
      />,
    );
  });

  story('long', () => {
    snap(
      `${RadioButtonTheme.Box} / long`,
      <VisualRadioButton
        theme={RadioButtonTheme.Box}
        label="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet."
      />,
    );
    snap(
      `${RadioButtonTheme.Box} / long / suffix`,
      <VisualRadioButton
        theme={RadioButtonTheme.Box}
        suffix="$50,000"
        label="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet."
      />,
    );
  });
});
