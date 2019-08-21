import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { IconButton, Skins } from './';
import { ReactComponent as ShareIcon } from '../../assets/icons/Share.svg';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';

class IconButtonVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <IconButton icon={<ShareIcon />} {...this.props} />
        <IconButton icon={<ShareIcon />} skin={Skins.Full} {...this.props} />
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
        it: 'default',
        props: {
          disabled: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`IconButton/${describe}`, module).add(it, () => (
      <IconButtonVisual {...props} />
    ));
  });
});
