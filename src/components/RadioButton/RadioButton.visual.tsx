import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { RadioButton } from './';

class RadioButtonVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <RadioButton {...this.props} />
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
    storiesOf(`RadioButton/${describe}`, module).add(it, () => (
      <RadioButtonVisual {...props} />
    ));
  });
});
