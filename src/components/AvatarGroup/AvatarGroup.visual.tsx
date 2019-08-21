import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { AvatarGroup } from './';
import { AvatarGroupSize } from './AvatarGroup';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { DATA_IGNORE_HOOK } from '../../../test/visual/dataHooks';

const items = [
  {},
  { name: 'anonymous' },
  { name: 'Eve', src: 'https://randomuser.me/api/portraits/women/87.jpg' },
];

class AvatarGroupVisual extends React.Component<any> {
  static defaultProps = {
    items: [],
  };

  render() {
    const { ignoreTest } = this.props;

    return (
      <VisualTestContainer ignore={ignoreTest}>
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
      ignore: AvatarGroupSize.xxSmall === size,
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
  its.forEach(({ it, props, ignore }) => {
    storiesOf(`AvatarGroup/${describe}`, module).add(
      it,
      () => <AvatarGroupVisual {...props} ignoreTest={ignore} />,
      {
        eyes: {
          ignore: [{ selector: `[${DATA_IGNORE_HOOK}="true"]` }],
        },
      },
    );
  });
});
