import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Popover, PopoverProps } from './';

const defaultProps: PopoverProps = {
  onClose: () => {},
};

visualize('Popover', () => {
  story('render', () => {
    snap('default', <Popover {...defaultProps} />);
    snap('with arrow', <Popover withArrow {...defaultProps} />);
    snap('with shadow', <Popover withShadow {...defaultProps} />);
    snap('with title', <Popover title="title" {...defaultProps} />);
    snap('with arrow top', <Popover arrowTop="50px" {...defaultProps} />);
    snap('with right arrow', <Popover rightArrow {...defaultProps} />);
  });
});
