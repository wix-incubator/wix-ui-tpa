import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Popover } from './';

class PopoverVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Popover {...this.props} />
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
    storiesOf(`Popover/${describe}`, module).add(it, () => (
      <PopoverVisual {...props} />
    ));
  });
});
