import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Counter, CounterSize } from './';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';

class CounterVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Counter
          inputAriaLabel={'amount'}
          incrementAriaLabel={'increment'}
          decrementAriaLabel={'decrement'}
          onChange={() => {}}
          {...this.props}
        />
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
      {
        it: 'disabled',
        props: { disabled: true },
      },
      {
        it: 'error',
        props: { error: true },
      },
      {
        it: 'disabled minus',
        props: { min: 10, value: 10 },
      },
      {
        it: 'disabled plus',
        props: { max: 10, value: 10 },
      },
      {
        it: 'xSmal',
        props: { size: CounterSize.xSmall },
      },
      {
        it: 'xSmal disabled',
        props: { size: CounterSize.xSmall, disabled: true },
      },
      {
        it: 'xSmal error',
        props: { size: CounterSize.xSmall, error: true },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Counter/${describe}`, module).add(it, () => (
      <CounterVisual {...props} />
    ));
  });
});
