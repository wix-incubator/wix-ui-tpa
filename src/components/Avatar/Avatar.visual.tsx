import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from './';
import { AvatarSize } from './Avatar';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';

class AvatarVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    return (
      <VisualTestContainer>
        <Avatar data-hook={'storybook-e2e-Avatar'} {...this.props} />
      </VisualTestContainer>
    );
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
        src:
          'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_120,h_120/c78d05b79ede429fb77c9d8ec4443b93.jpg',
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
