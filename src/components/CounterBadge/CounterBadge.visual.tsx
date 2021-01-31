import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CounterBadge, COUNTER_BADGE_PRIORITY, CounterBadgeProps } from '.';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { classes } from './CounterBadge.visual.st.css';

class CounterBadgeVisual extends React.Component<CounterBadgeProps> {
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
        it: 'primary',
        props: {
          priority: COUNTER_BADGE_PRIORITY.primary,
          value: 88,
        },
      },
      {
        it: 'secondary',
        props: {
          priority: COUNTER_BADGE_PRIORITY.secondary,
          value: 13,
          maximum: 9,
        },
      },
      {
        it: 'above maximum',
        props: {
          value: 143,
          maximum: 50,
        },
      },
      {
        it: 'style params override - palette',
        props: {
          className: classes.paletteStyleParams,
          value: 53,
        },
      },
      {
        it: 'style params override - static',
        props: {
          className: classes.staticStyleParams,
          value: 7,
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
