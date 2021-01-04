import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { RadioButtonGroup } from './';
import { RadioButton } from '../RadioButton';
import { RadioButtonGroupLayout } from './RadioButtonGroup';
import { RadioButtonTheme } from '../RadioButton/RadioButton';

class RadioButtonGroupVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <RadioButtonGroup
          name={'group'}
          onChange={(e) => console.log(e)}
          value={'option'}
          {...this.props}
        />
      </VisualTestContainer>
    );
  }
}

const radioButtonEl = <RadioButton key={1} label={'meow'} value={'meow'} />;
const radioButtonElAnother = (
  <RadioButton key={1} label={'meow'} value={'meow'} />
);
const radioButtonEl2 = <RadioButton key={1} label={'meow'} value={'meow'} />;

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
          label: "No worries. I'm a label.",
        },
      },
      {
        it: 'with label',
        props: {
          withSpacing: true,
          children: [radioButtonEl, radioButtonElAnother, radioButtonEl2],
          label: "No worries. I'm a label.",
        },
      },
      {
        it: 'with horizontal layout',
        props: {
          children: [radioButtonEl],
          label: "No worries. I'm a label.",
          layout: RadioButtonGroupLayout.Horizontal,
        },
      },
      {
        it: 'with horizontal layout with error text',
        props: {
          children: [radioButtonEl],
          label: "No worries. I'm a label.",
          layout: RadioButtonGroupLayout.Horizontal,
          errorText: "I'm an error",
          error: true,
        },
      },
      {
        it: 'with disabled',
        props: {
          children: [radioButtonEl],
          label: "No worries. I'm a label.",
          disabled: true,
        },
      },
      {
        it: 'with error',
        props: {
          children: [radioButtonEl],
          label: "No worries. I'm a label.",
          error: true,
        },
      },
      {
        it: 'with error text',
        props: {
          children: [radioButtonEl],
          label: "No worries. I'm a label.",
          error: true,
          errorText: "I'm error text",
        },
      },
      {
        it: 'with box theme',
        props: {
          children: [radioButtonEl],
          label: "No worries. I'm a label.",
          theme: RadioButtonTheme.Box,
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
