import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { AvatarGroup } from './';
import { AvatarGroupSize } from './AvatarGroup';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';

const items = [
  {},
  { name: 'anonymous' },
  {
    name: 'Eve',
    src:
      'https://static.wixstatic.com/media/11062b_c09ec4aab8204a38addeb492a8cb8c3e~mv2_d_1670_2299_s_2.jpg/v1/fill/w_120,h_120/11062b_c09ec4aab8204a38addeb492a8cb8c3e~mv2_d_1670_2299_s_2.jpg',
  },
];

const WAIT_TIMEOUT = 600;

class AvatarGroupVisual extends React.Component<any> {
  static defaultProps = {
    items: [],
  };

  _waitForImages(): Promise<void> {
    return new Promise(res => {
      setTimeout(res, WAIT_TIMEOUT);
    });
  }

  render() {
    return (
      <VisualTestContainer hook={this._waitForImages}>
        <AvatarGroup {...this.props} />
      </VisualTestContainer>
    );
  }
}

const tests = Object.keys(AvatarGroupSize).map(avatarSize => ({
  describe: `size: ${avatarSize}`,
  its: generateIts(avatarSize),
}));

function generateIts(size) {
  return [
    {
      it: 'Empty',
      props: { size },
    },
    {
      it: 'With 3 items and default limit',
      props: { size, items: [...items] },
    },
    {
      it: 'With 6 items and default limit',
      props: {
        size,
        items: [...items, ...items],
      },
    },
    {
      it: 'With 12 items and custom limit',
      props: {
        items: [...items, ...items, ...items, ...items],
        maxAmount: 9,
        size,
      },
    },
  ];
}

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`AvatarGroup/${describe}`, module).add(it, () => (
      <AvatarGroupVisual {...props} />
    ));
  });
});
