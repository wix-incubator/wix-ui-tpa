import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { Ratings, Mode, IconSize } from '.';

class RatingsVisual extends React.Component<any> {
  static defaultProps = {};

  render() {
    return (
      <VisualContainerElement>
        <Ratings {...this.props} />
      </VisualContainerElement>
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
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'error',
        props: {
          error: true,
        },
      },
      {
        it: 'display mode',
        props: {
          value: 3,
          mode: Mode.Display,
        },
      },
      {
        it: 'Large Icons',
        props: {
          value: 3,
          mode: Mode.Display,
          iconSize: IconSize.Large,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Ratings/${describe}`, module).add(it, () => (
      <RatingsVisual {...props} />
    ));
  });
});
