import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { CalendarPopover, CalendarPopoverProps, Sides } from '.';

const defaultProps: CalendarPopoverProps = {
  onClose: () => {},
  closeAriaLabel: 'close',
};

visualize('CalendarPopover', () => {
  story('render', () => {
    snap('default - not shown', <CalendarPopover {...defaultProps} />);
    snap(
      'with shadow',
      <CalendarPopover withShadow isShown {...defaultProps} />,
    );
    snap(
      'with title',
      <CalendarPopover title="title" isShown {...defaultProps} />,
    );
    snap(
      'with arrow top',
      <CalendarPopover arrowTop={50} isShown {...defaultProps} />,
    );
    snap(
      'with left arrow',
      <CalendarPopover withArrow isShown {...defaultProps} />,
    );
    snap(
      'with right arrow',
      <CalendarPopover arrowSide={Sides.Right} {...defaultProps} />,
    );
    snap('animated', <CalendarPopover animated {...defaultProps} />);
    snap('manual focus', <CalendarPopover manualFocus {...defaultProps} />);
  });
});
