import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { CopyUrlButton } from './';

class CopyUrlButtonVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <CopyUrlButton {...this.props} />
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
    storiesOf(`CopyUrlButton/${describe}`, module).add(it, () => (
      <CopyUrlButtonVisual {...props} />
    ));
  });
});
