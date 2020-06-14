import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Picker } from './';

const defaultProps = {
  onNext: () => {},
  onPrev: () => {},
};

const options = ['sep, oct, nov'];

visualize('Picker', () => {
  story('render', () => {
    snap('default', () => <Picker {...defaultProps} />);
    snap('options', () => <Picker {...defaultProps} options={options} />);
    snap('options with index', () => (
      <Picker {...defaultProps} options={options} currentIndex={2} />
    ));
  });
});
