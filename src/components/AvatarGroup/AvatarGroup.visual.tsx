import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { AvatarGroup } from './';

class AvatarGroupVisual extends React.Component<any> {
  static defaultProps = {
    items: [],
  };

  render() {

    return (
      <AvatarGroup {...this.props} />
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {items: [{name: 'User'}]},
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`AvatarGroup/${describe}`, module).add(it, () => (
      <AvatarGroupVisual {...props} />
    ));
  });
});
