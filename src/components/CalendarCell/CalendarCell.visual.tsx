import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { CalendarCell, Times } from './';

class CalendarCellVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <CalendarCell time="14" {...this.props} />
      </VisualTestContainer>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {
          time: '12'
        },
      },
      {
        it: 'previous-month',
        props: {
          time: '12',
          timeType: Times.previousMonth
        },
      },
      {
        it: 'previous-days',
        props: {
          time: '12',
          timeType: Times.previousDays
        },
      },
      {
        it: 'current-day',
        props: {
          time: '12',
          timeType: Times.currentDay
        },
      },
      {
        it: 'next-month',
        props: {
          time: '12',
          timeType: Times.nextMonth
        },
      },
      {
        it: 'stretchable',
        props: {
          time: '12',
          stretchable: true
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`CalendarCell/${describe}`, module).add(it, () => (
      <CalendarCellVisual {...props} />
    ));
  });
});
