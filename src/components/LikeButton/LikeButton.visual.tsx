import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LabelPlacement, LikeButton } from './';

class LikeButtonVisual extends React.Component<any> {
  render() {
    return (
      <React.Fragment>
        <LikeButton {...this.props} />
        <LikeButton {...this.props} checked />
        <LikeButton {...this.props} disabled />
      </React.Fragment>
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
  {
    describe: 'label',
    its: [
      {
        it: 'default (placement END)',
        props: {
          label: 'Like',
        },
      },
      {
        it: 'placement START',
        props: {
          label: 'Like',
          labelPlacement: LabelPlacement.START,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`LikeButton/${describe}`, module).add(it, () => (
      <LikeButtonVisual {...props} />
    ));
  });
});
