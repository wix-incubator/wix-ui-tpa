import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { Omit } from '../../types';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { CalendarCell, Times, CalendarCellProps } from './';

const VisualCalendarCell = (props: CalendarCellProps) => (
  <CalendarCell title={'12'} {...props} />
);

visualize('ShareButton', () => {
  story('render', () => {
    snap('title', <VisualCalendarCell title="12" />);
    snap(
      'current-day',
      <VisualCalendarCell title="12" timeType={Times.currentDay} />,
    );
    snap('stretchable', <VisualCalendarCell title="12" stretchable />);
  });
});
