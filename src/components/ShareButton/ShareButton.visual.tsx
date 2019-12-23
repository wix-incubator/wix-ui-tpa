import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ShareButton } from './';
import { ShareButtonProps } from './ShareButton';

class ShareButtonVisual extends React.Component<ShareButtonProps> {
  render() {
    return (
      <VisualTestContainer>
        <ShareButton {...this.props} />
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
        props: {
          title: 'Share title',
          url: 'https://wix.com',
          onClick: sharePromise => {
            if (!sharePromise) {
              alert('share clicked');
            }
          },
          children: 'Share',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ShareButton/${describe}`, module).add(it, () => (
      <ShareButtonVisual {...props} />
    ));
  });
});
