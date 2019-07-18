import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { NewCard } from './';

class NewCardVisual extends React.Component<any> {
  render() {
    return (
      <VisualContainerElement>
        <NewCard {...this.props} />
      </VisualContainerElement>
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
