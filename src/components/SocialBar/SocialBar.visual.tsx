import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { SocialBar } from './';

class SocialBarVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <SocialBar {...this.props} />
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
    storiesOf(`SocialBar/${describe}`, module).add(it, () => (
      <SocialBarVisual {...props} />
    ));
  });
});
