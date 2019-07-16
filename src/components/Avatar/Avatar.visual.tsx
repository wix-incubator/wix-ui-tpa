import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar } from './';

class AvatarVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    return <Avatar data-hook={'storybook-e2e-Avatar'} {...this.props} />;
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
    storiesOf(`Avatar/${describe}`, module).add(it, () => (
      <AvatarVisual {...props} />
    ));
  });
});
