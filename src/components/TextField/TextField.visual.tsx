import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { TextField, TextFieldProps } from './TextField';
import { TextFieldAsyncVisual } from './TextFieldAsyncVisual';
import { TextFieldTheme } from './TextFieldEnums';
import { ReactComponent as Calendar } from '../../assets/icons/Calendar.svg';

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

function snapTest({
  theme,
  mouseAction,
  hover,
  focus,
  dir,
  success = false,
  error = false,
  suffix = null,
  withClearButton = false,
}) {
  snap(
    `${theme}${success ? '/success' : ''}${error ? '/error' : ''}${
      suffix ? '/suffix' : ''
    }${withClearButton ? '/withClearButton' : ''}/${mouseAction}`,
    (done) => (
      <TextFieldAsyncVisual onDone={done} hover={hover} focus={focus} dir={dir}>
        <TextField
          theme={theme}
          success={success}
          successIcon={success}
          error={error}
          errorMessage={'This is an error message'}
          value={'Some value'}
          suffix={suffix}
          withClearButton={withClearButton}
        />
      </TextFieldAsyncVisual>
    ),
  );
}

visualize('TextField', () => {
  ['ltr', 'rtl'].forEach((dir: 'ltr' | 'rtl') => {
    story(dir, () => {
      Object.values(TextFieldTheme).forEach((theme) => {
        ['hover', 'focus'].forEach((mouseAction) => {
          const hover = mouseAction === 'hover';
          const focus = mouseAction === 'focus';

          snapTest({ theme, mouseAction, focus, hover, dir });
          snapTest({
            theme,
            mouseAction,
            focus,
            hover,
            dir,
            success: true,
          });
          snapTest({
            theme,
            mouseAction,
            focus,
            hover,
            dir,
            error: true,
          });
          snapTest({
            theme,
            mouseAction,
            focus,
            hover,
            dir,
            suffix: <Calendar />,
          });
          snapTest({
            theme,
            mouseAction,
            focus,
            hover,
            dir,
            withClearButton: true,
          });
          snapTest({
            theme,
            mouseAction,
            focus,
            hover,
            dir,
            suffix: <Calendar />,
            withClearButton: true,
          });
          snapTest({
            theme,
            mouseAction,
            focus,
            hover,
            dir,
            error: true,
            suffix: <Calendar />,
            withClearButton: true,
          });
        });
      });
    });
  });
});
