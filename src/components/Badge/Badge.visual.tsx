import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, BADGE_PRIORITY } from './';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { classes } from './Badge.visual.st.css';

class BadgeVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Badge {...this.props} />
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
          priority: BADGE_PRIORITY.default,
          children: ['Default'],
        },
      },
      {
        it: 'primary',
        props: {
          priority: BADGE_PRIORITY.primary,
          children: ['Primary'],
        },
      },
      {
        it: 'light',
        props: {
          priority: BADGE_PRIORITY.light,
          children: ['Light'],
        },
      },
      {
        it: 'style params override - from palette',
        props: {
          className: classes.palette,
          children: ['Style Params Override'],
        },
      },
      {
        it: 'style params override - static',
        props: {
          className: classes.staticColors,
          children: ['Style Params Override'],
        },
      },
      {
        it: 'style params override - from palette - optimized',
        props: {
          className: classes.paletteStyleParams,
          children: ['Style Params Override'],
        },
      },
      {
        it: 'style params override - static - optimized',
        props: {
          className: classes.staticColorsSiteParams,
          children: ['Style Params Override'],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Badge/${describe}`, module).add(it, () => (
      <BadgeVisual {...props} />
    ));
  });
});
