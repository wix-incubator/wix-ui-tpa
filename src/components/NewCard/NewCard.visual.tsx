import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { NewCard } from './';

class NewCardVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <NewCard {...this.props} />
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
    storiesOf(`NewCard/${describe}`, module).add(it, () => (
      <NewCardVisual {...props} />
    ));
  });
});
