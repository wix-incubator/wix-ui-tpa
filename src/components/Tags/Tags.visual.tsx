import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Tags } from './';

class TagsVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Tags {...this.props} />
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
    storiesOf(`Tags/${describe}`, module).add(it, () => (
      <TagsVisual {...props} />
    ));
  });
});
