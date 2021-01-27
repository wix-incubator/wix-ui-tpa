import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CounterBadge, COUNTER_BADGE_PRIORITY } from '.';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { classes } from './CounterBadge.visual.st.css';

class CounterBadgeVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <CounterBadge {...this.props} />
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
          priority: COUNTER_BADGE_PRIORITY.default,
          value: 5,
        },
      },
      {
        it: 'primary',
        props: {
          priority: COUNTER_BADGE_PRIORITY.primary,
          value: 88,
        },
      },
      {
        it: 'secondery',
        props: {
          priority: COUNTER_BADGE_PRIORITY.secondary,
          value: 13,
          maximum: 9,
        },
      },
      {
        it: 'above maximum',
        props: {
          className: classes.palette,
          value: 143,
          maximum: 50,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`CounterBadge/${describe}`, module).add(it, () => (
      <CounterBadgeVisual {...props} />
    ));
  });
});
