import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { CalendarCell, CalendarCellProps } from './';

const defaultProps: CalendarCellProps = {
  title: '12',
};

visualize('CalendarCell', () => {
  story('render', () => {
    snap('title', <CalendarCell {...defaultProps} />);
    snap('bold title', <CalendarCell boldTitle {...defaultProps} />);
    snap('bold background', <CalendarCell boldBackground {...defaultProps} />);
    snap(
      'bold background and title',
      <CalendarCell boldBackground boldTitle {...defaultProps} />,
    );
    snap('current-day', <CalendarCell current {...defaultProps} />);
    snap('stretchable', <CalendarCell {...defaultProps} stretchable />);
  });
});
