import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { CalendarCell, CalendarCellProps, Alignment, Times } from './';

const defaultProps: CalendarCellProps = {
  title: '12',
};

visualize('CalendarCell', () => {
  story('render', () => {
    snap('title', <CalendarCell {...defaultProps} />);
    snap(
      'past date',
      <CalendarCell timeType={Times.pastDate} {...defaultProps} />,
    );
    snap('today', <CalendarCell timeType={Times.today} {...defaultProps} />);
    snap(
      'future date',
      <CalendarCell timeType={Times.futureDate} {...defaultProps} />,
    );
    snap('current', <CalendarCell current {...defaultProps} />);
    snap(
      'past date and current',
      <CalendarCell timeType={Times.pastDate} current {...defaultProps} />,
    );
    snap(
      'future date and current',
      <CalendarCell timeType={Times.futureDate} current {...defaultProps} />,
    );
    snap('stretchable', <CalendarCell {...defaultProps} stretchable />);
    snap(
      'left',
      <CalendarCell alignment={Alignment.left} {...defaultProps} stretchable />,
    );
    snap(
      'center',
      <CalendarCell alignment={Alignment.center} {...defaultProps} />,
    );
    snap(
      'right',
      <CalendarCell alignment={Alignment.right} {...defaultProps} />,
    );
  });
});
