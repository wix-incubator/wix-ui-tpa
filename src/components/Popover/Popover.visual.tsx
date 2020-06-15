import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Popover, PopoverProps } from './';

const defaultProps: PopoverProps = {
  onClose: () => {},
};

visualize('Popover', () => {
  story('render', () => {
    snap('default - not shown', <Popover {...defaultProps} />);
    snap('with arrow', <Popover withArrow isShown {...defaultProps} />);
    snap('with shadow', <Popover withShadow isShown {...defaultProps} />);
    snap('with title', <Popover title="title" isShown {...defaultProps} />);
    snap(
      'with arrow top',
      <Popover arrowTop="50px" isShown {...defaultProps} />,
    );
    snap('with right arrow', <Popover rightArrow isShown {...defaultProps} />);
    snap('animated', <Popover animated {...defaultProps} />);
  });
});
