import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Checkbox, CheckboxTheme } from './';

class CheckboxVisual extends React.Component<any> {
  render() {
    return (
      <VisualTestContainer>
        <Checkbox {...this.props} onChange={() => {}} />
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
        props: {
          onChange: () => {},
          label: 'Amazing',
        },
      },
      {
        it: 'error',
        props: {
          error: true,
          onChange: () => {},
          label: 'Amazing',
        },
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
          onChange: () => {},
          label: 'Amazing',
        },
      },
      {
        it: 'checked',
        props: {
          checked: true,
          onChange: () => {},
          label: 'Amazing',
        },
      },
      {
        it: 'indeterminate',
        props: {
          indeterminate: true,
          onChange: () => {},
          label: 'Amazing',
        },
      },
      {
        it: 'box',
        props: {
          theme: CheckboxTheme.Box,
          onChange: () => {},
          label: 'Amazing',
        },
      },
      {
        it: 'suffix',
        props: {
          suffix: '$50,000',
          theme: CheckboxTheme.Box,
          onChange: () => {},
          label: 'Amazing',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Checkbox/${describe}`, module).add(it, () => (
      <CheckboxVisual {...props} />
    ));
  });
});
