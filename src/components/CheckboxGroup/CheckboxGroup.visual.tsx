import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { CheckboxGroup } from './';
import { Checkbox } from '../Checkbox';

class CheckboxGroupVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <CheckboxGroup {...this.props} />
      </VisualTestContainer>
    );
  }
}

const checkboxEl = (
  <Checkbox key={1} checked={false} onChange={() => {}} label="hello" />
);

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {
          children: [checkboxEl],
        },
      },
      {
        it: 'with label',
        props: {
          children: [checkboxEl],
          label: "No worries. I'm a label.",
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`CheckboxGroup/${describe}`, module).add(it, () => (
      <CheckboxGroupVisual {...props} />
    ));
  });
});
