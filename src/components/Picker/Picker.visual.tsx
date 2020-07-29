import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Picker } from './';

const defaultProps = {
  onNext: () => {},
  onPrev: () => {},
  value: 'October 2020',
};

visualize('Picker', () => {
  story('render', () => {
    snap('default', () => <Picker {...defaultProps} />);
    snap('prev disabled', () => <Picker prevDisabled {...defaultProps} />);
    snap('next disabled', () => <Picker nextDisabled {...defaultProps} />);
  });
});
