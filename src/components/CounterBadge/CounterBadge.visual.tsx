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
          children: ['5'],
        },
      },
      {
        it: 'primary',
        props: {
          priority: COUNTER_BADGE_PRIORITY.primary,
          children: ['143'],
        },
      },
      {
        it: 'secondery',
        props: {
          priority: COUNTER_BADGE_PRIORITY.secondary,
          children: ['143'],
          maximum: 50,
        },
      },
      {
        it: 'above maximum',
        props: {
          className: classes.palette,
          children: ['143'],
          maximum: 50,
        },
      },
      {
        it: 'below minimum',
        props: {
          className: classes.staticColors,
          children: ['5'],
          maximum: 6,
        },
      },
      {
        it: 'not valid',
        props: {
          className: classes.staticColors,
          children: ['asv'],
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
