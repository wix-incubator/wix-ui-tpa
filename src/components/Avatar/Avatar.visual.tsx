import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar } from './';
import { AvatarSize } from './Avatar';

class AvatarVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    return <Avatar data-hook={'storybook-e2e-Avatar'} {...this.props} />;
  }
}

const tests = Object.keys(AvatarSize).map(avatarSize => ({
  describe: `size: ${avatarSize}`,
  its: generateIts(avatarSize),
}));

function generateIts(size) {
  return [
    {
      it: 'Anonymous',
      props: { size },
    },
    {
      it: 'Without image',
      props: { size, name: 'Peter' },
    },
    {
      it: 'With image',
      props: {
        size,
        name: 'Eve',
        src: 'https://randomuser.me/api/portraits/men/65.jpg',
      },
    },
  ];
}

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Avatar/${describe}`, module).add(it, () => (
      <AvatarVisual {...props} />
    ));
  });
});
