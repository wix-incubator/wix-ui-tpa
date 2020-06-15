import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Popover, PopoverProps, Sides } from './';

const defaultProps: PopoverProps = {
  onClose: () => {},
};

visualize('Popover', () => {
  story('render', () => {
    snap('default - not shown', <Popover {...defaultProps} />);
    snap('with shadow', <Popover withShadow isShown {...defaultProps} />);
    snap('with title', <Popover title="title" isShown {...defaultProps} />);
    snap('with arrow top', <Popover arrowTop={50} isShown {...defaultProps} />);
    snap('with left arrow', <Popover withArrow isShown {...defaultProps} />);
    snap(
      'with right arrow',
      <Popover withArrow arrowSide={Sides.Right} isShown {...defaultProps} />,
    );
    snap('animated', <Popover animated {...defaultProps} />);
  });
});
