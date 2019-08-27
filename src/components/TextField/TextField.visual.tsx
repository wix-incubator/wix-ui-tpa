import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { TextField, TextFieldProps } from './TextField';

class TextFieldVisual extends React.Component<TextFieldProps> {
  static defaultProps: TextFieldProps = {
    placeholder: 'Placeholder',
    onChange: () => {},
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  render() {
    return (
      <VisualTestContainer>
        <TextField {...this.props} />
      </VisualTestContainer>
    );
  }
}

interface Test {
  describe: string;
  its: {
    it: string;
    props: Partial<TextFieldProps>;
  }[];
}

const tests: Test[] = [
  {
    describe: 'TextField',
    its: [
      {
        it: 'Placeholder',
        props: {
          placeholder: 'Placeholder',
          value: '',
        },
      },
      {
        it: 'Value',
        props: {
          value: 'This is a value',
        },
      },
      {
        it: 'Error',
        props: {
          error: true,
        },
      },
      {
        it: 'Error with error message',
        props: {
          error: true,
          errorMessage: 'This is an error message',
        },
      },
      {
        it: 'Success',
        props: {
          success: true,
        },
      },
      {
        it: 'Disabled',
        props: {
          disabled: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`TextField/${describe}`, module).add(it, () => (
      <TextFieldVisual {...props} />
    ));
  });
});
