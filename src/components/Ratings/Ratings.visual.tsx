import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Ratings, Mode, Size } from '.';

class RatingsVisual extends React.Component<any> {
  static defaultProps = {
    hook: null,
  };

  render() {
    const ratingsProps = { ...this.props };
    delete ratingsProps.hook;
    return (
      <VisualTestContainer>
        <Ratings {...ratingsProps} />
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
        it: 'Large Size',
        props: {
          value: 3,
          mode: Mode.Display,
          size: Size.Large,
        },
      },
      {
        it: 'Input Options',
        props: {
          mode: Mode.Input,
          size: Size.Large,
          inputOptions: ['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla'],
        },
      },
      {
        it: 'Input Options with Initial value',
        props: {
          value: 3,
          mode: Mode.Input,
          size: Size.Large,
          inputOptions: ['Very baasa', 'Baasa', 'OK', 'Magniv', 'Achla'],
        },
      },
      {
        it: 'count info & rating info',
        props: {
          value: 3,
          mode: Mode.Display,
          countDisplay: '150',
          ratingDisplay: '3.0',
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
