import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Checkbox, CheckboxTheme } from './';

class CheckboxVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Checkbox {...this.props} label="Amazing" onChange={() => {}} />
      </VisualTestContainer>
    );
  }
}

visualize('Checkbox', () => {
  story('default', () => {
    Object.values(CheckboxTheme).map(theme => {
      snap(`${theme} / default`,  <CheckboxVisual theme={theme} />);
    });
  });

  story('checked', () => {
    Object.values(CheckboxTheme).map(theme => {
      snap(`${theme} / checked`,  <CheckboxVisual theme={theme} checked />);
    });
  });

  story('error', () => {
    snap(`${CheckboxTheme.Default} / error`,  <CheckboxVisual theme={CheckboxTheme.Default} error />);
  });

  story('disabled', () => {
    Object.values(CheckboxTheme).map(theme => {
      snap(`${theme} / disabled`,  <CheckboxVisual theme={theme} disabled />);
      snap(`${theme} / disabled / checked`,  <CheckboxVisual theme={theme} disabled checked />);
    });
  });

  story('indeterminate', () => {
    Object.values(CheckboxTheme).map(theme => {
      snap(`${theme} / indeterminate`,  <CheckboxVisual theme={theme} indeterminate />);
    });
  });

  story('suffix', () => {
    snap( `${CheckboxTheme.Box} / suffix`,  <CheckboxVisual theme={CheckboxTheme.Box} suffix="$50,000" />);
  });
});
