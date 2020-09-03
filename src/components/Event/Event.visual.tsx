import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Event, EventProps } from './';

const defaultProps: EventProps = {
  title: 'Calendar Lunch',
};

visualize('Event', () => {
  story('render', () => {
    snap('default', <Event {...defaultProps} />);
    snap('time', <Event time="23:23" {...defaultProps} />);
    snap('timeShown', <Event showTime {...defaultProps} />);
    snap('fullday', <Event fullday {...defaultProps} />);
    snap('selected', <Event selected {...defaultProps} />);
    snap('clickable', <Event onClick={() => {}} {...defaultProps} />);
    snap('disabled', <Event onClick={() => {}} disabled {...defaultProps} />);
  });
});
