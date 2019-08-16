import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { CheckboxGroup } from './';
import { Checkbox } from '../Checkbox';

class CheckboxGroupVisual extends React.Component<any> {
  render() {
    return (
      <VisualContainerElement>
        <CheckboxGroup {...this.props} />
      </VisualContainerElement>
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
