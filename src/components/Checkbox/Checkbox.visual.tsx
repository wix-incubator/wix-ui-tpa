import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Checkbox, CheckboxTheme, CheckboxProps } from './';

class CheckboxVisual extends React.Component<Partial<CheckboxProps>> {
  render() {
    return (
      <VisualTestContainer>
        <Checkbox
          {...this.props}
          label={this.props.label || 'Amazing'}
          onChange={() => {}}
        />
      </VisualTestContainer>
    );
  }
}

visualize('Checkbox', () => {
  story('default', () => {
    Object.values(CheckboxTheme).map((theme) => {
      snap(`${theme} / default`, <CheckboxVisual theme={theme} />);
    });
  });

  story('checked', () => {
    Object.values(CheckboxTheme).map((theme) => {
      snap(`${theme} / checked`, <CheckboxVisual theme={theme} checked />);
    });
  });

  story('error', () => {
    snap(
      `${CheckboxTheme.Default} / error`,
      <CheckboxVisual theme={CheckboxTheme.Default} error />,
    );
  });

  story('disabled', () => {
    Object.values(CheckboxTheme).map((theme) => {
      snap(`${theme} / disabled`, <CheckboxVisual theme={theme} disabled />);
      snap(
        `${theme} / disabled / checked`,
        <CheckboxVisual theme={theme} disabled checked />,
      );
    });
  });

  story('indeterminate', () => {
    Object.values(CheckboxTheme).map((theme) => {
      snap(
        `${theme} / indeterminate`,
        <CheckboxVisual theme={theme} indeterminate />,
      );
    });
  });

  story('suffix', () => {
    snap(
      `${CheckboxTheme.Box} / suffix`,
      <CheckboxVisual theme={CheckboxTheme.Box} suffix="$50,000" />,
    );
  });

  story('long', () => {
    snap(
      `${CheckboxTheme.Box} / long`,
      <CheckboxVisual
        theme={CheckboxTheme.Box}
        label="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet."
      />,
    );
    snap(
      `${CheckboxTheme.Box} / long / suffix`,
      <CheckboxVisual
        theme={CheckboxTheme.Box}
        suffix="$50,000"
        label="It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet."
      />,
    );
  });
});
