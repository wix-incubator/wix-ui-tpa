import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Omit } from '../../types';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { CalendarCell, Times, CalendarCellProps } from './';

const defaultProps: CalendarCellProps = {
  title: '12'
}

visualize('ShareButton', () => {
  story('render', () => {
    snap('title', <CalendarCell {...defaultProps} />);
    snap(
      'current-day',
      <CalendarCell {...defaultProps} timeType={Times.currentDay} />,
    );
    snap('stretchable', <CalendarCell {...defaultProps} stretchable />);
  });
});
