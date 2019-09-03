import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { TextArea, TextAreaProps, TextAreaTheme } from './';

class TextAreaVisual extends React.Component<TextAreaProps> {
  static defaultProps: TextAreaProps = {
    placeholder: 'Placeholder',
    ariaLabel: 'Test',
    onChange: () => {},
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  render() {
    return (
      <VisualTestContainer>
        <TextArea {...this.props} />
      </VisualTestContainer>
    );
  }
}

interface Test {
  describe: string;
  its: {
    it: string;
    props: Partial<TextAreaProps>;
  }[];
}

const tests: Test[] = [
  {
    describe: 'TextArea',
    its: [
      {
        it: 'placeholder',
        props: {
          value: '',
          placeholder: 'Placeholder',
        },
      },
      {
        it: 'text',
        props: {
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'error',
        props: {
          error: true,
        },
      },
      {
        it: 'error with description',
        props: {
          error: true,
          errorDescription: 'Something went wrong',
        },
      },
      {
        it: 'success',
        props: {
          success: true,
        },
      },
      {
        it: 'theme line',
        props: {
          theme: TextAreaTheme.Line,
        },
      },
      {
        it: 'theme box',
        props: {
          theme: TextAreaTheme.Box,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`TextArea/${describe}`, module).add(it, () => (
      <TextAreaVisual {...props} />
    ));
  });
});
