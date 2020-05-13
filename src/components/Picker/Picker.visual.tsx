import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Picker } from './';

class PickerVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Picker {...this.props} />
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
    storiesOf(`Picker/${describe}`, module).add(it, () => (
      <PickerVisual {...props} />
    ));
  });
});
