import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {VisualTestContainer} from '../../../test/visual/VisualTestContainer';
import {RadioButtonGroup} from './';
import {RadioButton} from "../RadioButton";

class RadioButtonGroupVisual extends React.Component<any> {
  render() {
    return (
        <VisualTestContainer>
          <RadioButtonGroup onChange={(e)=>console.log(e)} defaultValue={"meowmeow"} {...this.props} />
        </VisualTestContainer>
    );
  }
}

const radioButtonEl = (
    <RadioButton key={1} label={"meow"} value={"meow"} />
);

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {
          children: [radioButtonEl],
        },
      },
      {
        it: 'with label',
        props: {
          children: [radioButtonEl],
          // label: "No worries. I'm a label.",
        },
      },
      {
        it: 'with horizontal layout',
        props: {
          children: [radioButtonEl],
          // label: "No worries. I'm a label.",
          // layout: CheckboxGroupLayout.Horizontal,
        },
      },
      {
        it: 'with horizontal layout with error text',
        props: {
          children: [radioButtonEl],
          // label: "No worries. I'm a label.",
          // layout: CheckboxGroupLayout.Horizontal,
          // errorText: "I'm an error",
          // error: true,
        },
      },
      {
        it: 'with disabled',
        props: {
          children: [radioButtonEl],
          // label: "No worries. I'm a label.",
          // disabled: true,
        },
      },
      {
        it: 'with error',
        props: {
          children: [radioButtonEl],
          // label: "No worries. I'm a label.",
          // error: true,
        },
      },
      {
        it: 'with error text',
        props: {
          children: [radioButtonEl],
          // label: "No worries. I'm a label.",
          // error: true,
          // errorText: "I'm error text",
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`RadioButtonGroup/${describe}`, module).add(it, () => (
        <RadioButtonGroupVisual {...props} />
    ));
  });
});
