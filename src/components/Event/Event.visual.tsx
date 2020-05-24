import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Event } from './';

class EventVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Event {...this.props} />
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
    storiesOf(`Event/${describe}`, module).add(it, () => (
      <EventVisual {...props} />
    ));
  });
});
