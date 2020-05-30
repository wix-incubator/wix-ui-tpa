import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { CheckboxGroup, CheckboxGroupLayout } from './';
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
      {
        it: 'with horizontal layout',
        props: {
          children: [checkboxEl],
          label: "No worries. I'm a label.",
          layout: CheckboxGroupLayout.Horizontal,
        },
      },
      {
        it: 'with horizontal layout with error text',
        props: {
          children: [checkboxEl],
          label: "No worries. I'm a label.",
          layout: CheckboxGroupLayout.Horizontal,
          errorText: "I'm an error",
          error: true,
        },
      },
      {
        it: 'with disabled',
        props: {
          children: [checkboxEl],
          label: "No worries. I'm a label.",
          disabled: true,
        },
      },
      {
        it: 'with error',
        props: {
          children: [checkboxEl],
          label: "No worries. I'm a label.",
          error: true,
        },
      },
      {
        it: 'with error text',
        props: {
          children: [checkboxEl],
          label: "No worries. I'm a label.",
          error: true,
          errorText: "I'm error text",
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
