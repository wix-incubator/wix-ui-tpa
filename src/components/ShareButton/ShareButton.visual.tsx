import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ShareButton } from './';

class ShareButtonVisual extends React.Component<any> {
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
        props: {},
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
