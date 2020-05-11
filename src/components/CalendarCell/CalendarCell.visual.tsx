import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { CalendarCell } from './';

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
        props: {},
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
