import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { visualize, story, snap } from '../../../test/visual/Snapper';
import { TextField, TextFieldProps } from './TextField';
import { dataHooks } from './docs/testData';
import { TextFieldAsyncVisual } from './TextFieldAsyncVisual';

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

['ltr', 'rtl'].forEach((dir: 'ltr' | 'rtl') => {
  visualize('TextField', () => {
    story(dir, () => {
      dataHooks.forEach(dataHook => {
        snap(`TextField${dir.toUpperCase()}-${dataHook}-hover`, done => (
          <TextFieldAsyncVisual
            dir={dir}
            onDone={done}
            hover
            testDataHook={dataHook}
          />
        ));

        snap(`TextField${dir.toUpperCase()}-${dataHook}-focus`, done => (
          <TextFieldAsyncVisual
            dir={dir}
            onDone={done}
            focus
            testDataHook={dataHook}
          />
        ));
      });
    });
  });
});
