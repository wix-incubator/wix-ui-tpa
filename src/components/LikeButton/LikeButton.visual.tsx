import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LikeButton } from './';

class LikeButtonVisual extends React.Component<any> {
  render() {
    return (
      <LikeButton data-hook={'storybook-e2e-LikeButton'} {...this.props} />
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it }) => {
    storiesOf(`LikeButton/${describe}`, module).add(it, () => (
      <LikeButtonVisual />
    ));
  });
});
